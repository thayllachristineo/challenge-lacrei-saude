'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Professional } from '@/lib/professionals';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ProfessionalCard from '@/components/ProfessionalCard';
import Select from '@/components/Select';
import {
  Form,
  FormAction,
  FormActionSpacer,
  Grid,
  ResultsHeader,
  SkeletonCard,
  StateBox,
} from './ProfessionalsExplorer.styled';

type ApiResponse = {
  data: Professional[];
  total: number;
  specialties: string[];
};

type ProfessionalsExplorerProps = {
  initialSpecialties: string[];
};

const ProfessionalsExplorer = ({
  initialSpecialties,
}: ProfessionalsExplorerProps) => {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [results, setResults] = useState<Professional[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading',
  );

  const fetchProfessionals = useCallback(
    async (params: { q: string; specialty: string }) => {
      setStatus('loading');
      try {
        const search = new URLSearchParams();
        if (params.q) search.set('q', params.q);
        if (params.specialty) search.set('specialty', params.specialty);

        const response = await fetch(`/api/professionals?${search.toString()}`);
        if (!response.ok) throw new Error('Falha na requisição');

        const json = (await response.json()) as ApiResponse;
        setResults(json.data);
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    },
    [],
  );

  useEffect(() => {
    // Carrega a lista inicial assim que o componente é montado (mock de API).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProfessionals({ q: '', specialty: '' });
  }, [fetchProfessionals]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchProfessionals({ q: query, specialty });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} aria-label="Buscar profissionais de saúde">
        <Input
          id="busca"
          name="busca"
          label="Buscar por nome, cidade ou especialidade"
          type="search"
          placeholder="Ex.: psicologia, São Paulo, Marina..."
          value={query}
          clearable
          onClear={() => setQuery('')}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Select
          id="especialidade"
          name="especialidade"
          label="Especialidade"
          placeholder="Todas as especialidades"
          value={specialty}
          onChange={(event) => setSpecialty(event.target.value)}
          options={initialSpecialties.map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <FormAction>
          <FormActionSpacer aria-hidden="true">.</FormActionSpacer>
          <Button type="submit" size="lg" isLoading={status === 'loading'}>
            Buscar
          </Button>
        </FormAction>
      </Form>

      <ResultsHeader>
        <h2 id="resultados">Profissionais disponíveis</h2>
        {status === 'ready' && (
          <p aria-live="polite">
            {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
          </p>
        )}
      </ResultsHeader>

      {status === 'loading' && (
        <Grid aria-hidden="true">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </Grid>
      )}

      {status === 'error' && (
        <StateBox role="alert">
          <p>Não foi possível carregar os profissionais.</p>
          <p style={{ marginTop: 16 }}>
            <Button onClick={() => fetchProfessionals({ q: query, specialty })}>
              Tentar novamente
            </Button>
          </p>
        </StateBox>
      )}

      {status === 'ready' &&
        (results.length > 0 ? (
          <Grid aria-labelledby="resultados">
            {results.map((professional) => (
              <li key={professional.id}>
                <ProfessionalCard professional={professional} />
              </li>
            ))}
          </Grid>
        ) : (
          <StateBox>
            <p>Nenhum profissional encontrado para os filtros selecionados.</p>
          </StateBox>
        ))}
    </div>
  );
};

export default ProfessionalsExplorer;
