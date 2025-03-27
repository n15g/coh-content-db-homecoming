import { BadgeData, mapLink } from 'coh-content-db'
import { TheAbyss } from '../../map/the-abyss'

export const Geneticist: BadgeData = {
  type: 'EXPLORATION',
  key: 'geneticist',
  setTitle: { id: 746 },
  name: [{ value: 'Geneticist' }],
  alignment: ['H', 'V', 'P'],
  mapKey: TheAbyss.key,
  loc: [-577, -35, -1113],
  badgeText: [{
    value: `You have visited the infamous 'Site C', where genetic experiments took place before the Devouring Earth took over the Abyss.`,
  }],
  notes: `Located in ${mapLink(TheAbyss)}, at the front door of the DE Gen building located on the eastern side of the southern landmass.`,
  links: [
    { title: 'Geneticist Badge', href: 'https://homecoming.wiki/wiki/Geneticist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
