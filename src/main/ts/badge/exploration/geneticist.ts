import { BadgeData } from 'coh-content-db'
import { TheAbyss } from '../../zone/the-abyss'

export const Geneticist: BadgeData = {
  type: 'exploration',
  key: 'geneticist',
  setTitleId: [746],
  name: 'Geneticist',
  morality: 'all',
  badgeText: `You have visited the infamous 'Site C', where genetic experiments took place before the Devouring Earth took over the Abyss.`,
  notes: `Located at the front door of the DE Gen building located on the eastern side of the southern landmass.`,
  links: [
    { title: 'Geneticist Badge', href: 'https://homecoming.wiki/wiki/Geneticist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheAbyss.key, coords: [-577, -35, -1113] }, vidiotMapKey: '2' },
  ],
}
