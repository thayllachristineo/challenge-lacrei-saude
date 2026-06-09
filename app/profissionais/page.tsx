import type { Metadata } from 'next';
import ProfessionalsHero from '@/components/ProfessionalsHero';
import ProfessionalsExplorer from '@/components/ProfessionalsExplorer';
import { LazyBackToTop } from '@/components/BackToTop';
import { specialties } from '@/lib/professionals';
import SectionSpacing from './SectionSpacing';

export const metadata: Metadata = {
  title: 'Encontrar profissionais',
  description:
    'Busque profissionais de saúde seguros e acolhedores por especialidade e localização na Lacrei Saúde.',
};

export default function ProfissionaisPage() {
  return (
    <>
      <ProfessionalsHero />
      <SectionSpacing>
        <ProfessionalsExplorer initialSpecialties={specialties} />
      </SectionSpacing>
      <LazyBackToTop />
    </>
  );
}
