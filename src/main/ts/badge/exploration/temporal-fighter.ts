import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const TemporalFighter: BadgeData = {
  type: 'exploration',
  key: 'temporal-fighter',
  setTitleId: [289],
  name: [
    { alignment: 'hero', value: 'Temporal Fighter' },
    { alignment: 'villain', value: 'Dark Victory' },
  ],
  morality: 'all',
  badgeText: 'The Meinhoff Building was created in our current timeline to serve as an Arachnos base in this possible future.',
  notes: `Located in  Sector 1, due west of the ramp leading out of the monorail station in a narrow alleyway between two buildings.`,
  links: [
    { title: 'Temporal Fighter Badge', href: 'https://homecoming.wiki/wiki/Temporal_Fighter_Badge' },
    { title: 'Dark Victory Badge', href: 'https://homecoming.wiki/wiki/Dark_Victory_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ReclusesVictory.key, coords: [1027, 42, -1420] }, vidiotMapKey: '3' },
  ],
}
