import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../map/recluses-victory'

export const TemporalFighter: BadgeData = {
  type: 'EXPLORATION',
  key: 'temporal-fighter',
  setTitle: { id: 289 },
  name: [
    { alignment: 'H', value: 'Temporal Fighter' },
    { alignment: 'V', value: 'Dark Victory' },
  ],
  alignment: ['H', 'V', 'P'],
  mapKey: ReclusesVictory.key,
  loc: [1027, 42, -1420],
  badgeText: [{ value: 'The Meinhoff Building was created in our current timeline to serve as an Arachnos base in this possible future.' }],
  notes: 'The Temporal Fighter Badge is located in the ${mapLink(ReclusesVictory)} zone in Sector 1.'
    + ' It is due west of the ramp leading out of the monorail station in a narrow alleyway between two buildings.',
  links: [
    { title: 'Temporal Fighter Badge', href: 'https://homecoming.wiki/wiki/Temporal_Fighter_Badge' },
    { title: 'Dark Victory Badge', href: 'https://homecoming.wiki/wiki/Dark_Victory_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '3',
}
