import { BadgeData } from 'coh-content-db'
import { Eden } from '../../zone/eden'

export const CreyFish: BadgeData = {
  type: 'exploration',
  key: 'crey-fish',
  setTitleId: [140],
  name: 'Crey Fish',
  morality: 'paragon-city-access',
  badgeText: `Surprisingly it was the Devouring Earth, not Crey, that caused Woodvale to become the overrun Eden.`,
  notes: `Located 26 feet to the east of The Utopia Complex marker.`,
  links: [
    { title: 'Crey Fish Badge', href: 'https://homecoming.wiki/wiki/Crey_Fish_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Eden.key, coords: [-1787, 0, 4550] }, vidiotMapKey: '1' },
  ],
}
