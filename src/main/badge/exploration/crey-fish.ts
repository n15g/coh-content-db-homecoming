import { BadgeData, zoneLink } from 'coh-content-db'
import { Eden } from '../../zone/eden'

export const CreyFish: BadgeData = {
  type: 'EXPLORATION',
  key: 'crey-fish',
  setTitle: { id: 140 },
  name: [{ value: 'Crey Fish' }],
  alignment: ['H'],
  zoneKey: Eden.key,
  loc: [-1787, 0, 4550],
  badgeText: [{
    value: `Surprisingly it was the Devouring Earth, not Crey, that caused Woodvale to become the overrun Eden.`,
  }],
  notes: `Located in ${zoneLink(Eden)} 26 feet to the east of The Utopia Complex marker.`,
  links: [
    { title: 'Crey Fish Badge', href: 'https://homecoming.wiki/wiki/Crey_Fish_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
