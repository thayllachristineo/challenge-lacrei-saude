'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import ButtonIcon from '@/components/ButtonIcon';
import {
  Actions,
  Avatar,
  Bio,
  Card,
  Identity,
  Meta,
  Name,
  Pronouns,
  Specialty,
  Top,
} from './ProfessionalProfileCard.styled';
import type { ProfessionalProfileCardProps } from './ProfessionalProfileCard.types';

/** Card de profissional com layout vertical e conteúdo completo. */
const ProfessionalProfileCard = ({
  id,
  name,
  pronouns,
  specialty,
  city,
  state,
  modality,
  rating,
  bio,
  initials,
  appointmentHref,
}: ProfessionalProfileCardProps) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Card aria-labelledby={`pro-${id}-name`}>
      <Top>
        <Avatar aria-hidden="true">{initials}</Avatar>
        <ButtonIcon
          variant={favorite ? 'primary' : 'ghost'}
          aria-pressed={favorite}
          aria-label={
            favorite
              ? `Remover ${name} dos favoritos`
              : `Adicionar ${name} aos favoritos`
          }
          onClick={() => setFavorite((prev) => !prev)}
        >
          <svg
            viewBox="0 0 24 24"
            fill={favorite ? 'currentColor' : 'none'}
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 21s-7-4.35-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 3.5C19 16.65 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonIcon>
      </Top>

      <Identity>
        <Name id={`pro-${id}-name`}>{name}</Name>
        <Pronouns>{pronouns}</Pronouns>
      </Identity>

      <Specialty>{specialty}</Specialty>

      <Meta>
        <li>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 21s-7-4.35-7-9.5A7 7 0 0 1 12 4a7 7 0 0 1 7 7.5C19 16.65 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="11"
              r="2.2"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          {city}, {state}
        </li>
        <li>{modality}</li>
        <li aria-label={`Avaliação ${rating} de 5`}>⭐ {rating.toFixed(1)}</li>
      </Meta>

      <Bio>{bio}</Bio>

      <Actions>
        <Button href={appointmentHref} variant="secondary" fullWidth>
          Ver perfil e agendar
        </Button>
      </Actions>
    </Card>
  );
};

export default ProfessionalProfileCard;
