export type DiversityTag = {
  label: string;
};

export type ServiceType = 'Particular' | 'Convênio';

export type Professional = {
  id: string;
  name: string;
  pronouns: string;
  specialty: string;
  city: string;
  state: string;
  modality: 'Online' | 'Presencial' | 'Online e Presencial';
  rating: number;
  bio: string;
  crm?: string;
  diversityTags?: DiversityTag[];
  serviceTypes?: ServiceType[];
};

/**
 * Base de dados simulada de profissionais (mock de integração).
 * Em produção, viria de uma API real; aqui é servida pelo route handler
 * `app/api/professionals/route.ts`.
 */
export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Dra. Marina Alves',
    pronouns: 'ela/dela',
    specialty: 'Clínica Geral',
    city: 'São Paulo',
    state: 'SP',
    modality: 'Online e Presencial',
    rating: 4.9,
    bio: 'Atendimento humanizado com foco em saúde integral da população LGBTQIAPN+.',
  },
  {
    id: '2',
    name: 'Dr. Caio Mendes',
    pronouns: 'ele/dele',
    specialty: 'Psiquiatria',
    city: 'Rio de Janeiro',
    state: 'RJ',
    modality: 'Online',
    rating: 4.8,
    bio: 'Saúde mental afirmativa, ansiedade e acompanhamento de pessoas trans.',
  },
  {
    id: '3',
    name: 'Dre. Sam Oliveira',
    pronouns: 'elu/delu',
    specialty: 'Psicologia',
    city: 'Belo Horizonte',
    state: 'MG',
    modality: 'Online',
    rating: 5.0,
    bio: 'Terapia afirmativa de gênero e acolhimento de jovens LGBTQIAPN+.',
  },
  {
    id: '4',
    name: 'Dra. Helena Costa',
    pronouns: 'ela/dela',
    specialty: 'Endocrinologia',
    city: 'Porto Alegre',
    state: 'RS',
    modality: 'Presencial',
    rating: 4.7,
    bio: 'Acompanhamento hormonal e cuidado integral em transição de gênero.',
  },
  {
    id: '5',
    name: 'Dr. Iuri Santana',
    pronouns: 'ele/dele',
    specialty: 'Infectologia',
    city: 'Recife',
    state: 'PE',
    modality: 'Online e Presencial',
    rating: 4.9,
    bio: 'Prevenção, PrEP e cuidado contínuo com escuta sem julgamentos.',
  },
  {
    id: '6',
    name: 'Dra. Bruna Tavares',
    pronouns: 'ela/dela',
    specialty: 'Ginecologia',
    city: 'Curitiba',
    state: 'PR',
    modality: 'Presencial',
    rating: 4.8,
    bio: 'Saúde ginecológica inclusiva para mulheres cis, trans e pessoas não-binárias.',
  },
];

export const specialties = Array.from(
  new Set(professionals.map((p) => p.specialty)),
).sort();

/** Filtra os profissionais por texto livre e especialidade. */
export function filterProfessionals({
  query = '',
  specialty = '',
}: {
  query?: string;
  specialty?: string;
}): Professional[] {
  const normalizedQuery = query.trim().toLowerCase();

  return professionals.filter((professional) => {
    const matchesSpecialty = specialty
      ? professional.specialty === specialty
      : true;
    const matchesQuery = normalizedQuery
      ? [
          professional.name,
          professional.specialty,
          professional.city,
          professional.state,
        ]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)
      : true;

    return matchesSpecialty && matchesQuery;
  });
}
