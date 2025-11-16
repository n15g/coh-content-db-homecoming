import { BadgeData } from 'coh-content-db'
import { DeathResurrected } from '../../mission/death-resurrected'

export const Psychopomp: BadgeData = {
  type: 'accomplishment',
  key: 'psychopomp',
  setTitleId: [2584],
  name: 'Psychopomp',
  releaseDate: '2025-11-30',
  morality: 'heroic',
  badgeText: `You discovered the source of the Skulls' new powers: mystifying pacts formed between themselves and the entities that ferry souls of the dead to the afterlife.`,
  acquisition: `Complete Wyllie Galloway's story arc.`,
  links: [
    { title: 'Psychopomp Badge', href: 'https://homecoming.wiki/wiki/Psychopomp_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/psychopomp.png',
  requirements: [
    { key: DeathResurrected.key, type: 'mission', missionKey: DeathResurrected.key },
  ],
}
