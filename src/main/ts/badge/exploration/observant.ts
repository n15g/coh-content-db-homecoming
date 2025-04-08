import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const Observant: BadgeData = {
  type: 'exploration',
  key: 'observant',
  setTitleId: [1516],
  name: 'Observant',
  morality: 'paragon-city-access',
  badgeText: `Vanguard only allows super-powered heroes and Vanguard officials into their compounds.
Although Vanguard scientists become annoyed when people look in on their various Rikti experiments, it is really their own fault for not having curtains to cover up the window.`,
  notes: `Located in the Vanguard building, outside a room where scientists can be seen performing experiments.`,
  links: [
    { title: 'Observant Badge', href: 'https://homecoming.wiki/wiki/Observant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AtlasPark.key, coords: [-135, -94, 470] }, vidiotMapKey: '8' },
  ],
}
