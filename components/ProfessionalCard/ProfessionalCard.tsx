'use client';

import type { Professional } from '@/lib/professionals';
import ProfessionalProfileCard from '@/components/ProfessionalProfileCard';

type ProfessionalCardProps = {
  professional: Professional;
};

const getInitials = (name: string) =>
  name
    .replace(/^(Dra?\.?e?\.?|Dre\.?)\s*/i, '')
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

/** Adapta dados de `Professional` para o card de perfil. */
const ProfessionalCard = ({ professional }: ProfessionalCardProps) => (
  <ProfessionalProfileCard
    id={professional.id}
    name={professional.name}
    pronouns={professional.pronouns}
    specialty={professional.specialty}
    city={professional.city}
    state={professional.state}
    modality={professional.modality}
    rating={professional.rating}
    bio={professional.bio}
    initials={getInitials(professional.name)}
    appointmentHref="/profissionais"
  />
);

export default ProfessionalCard;
