import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardBrickstown } from '../../zone/safeguard-brickstown'

export const Cornerstone: BadgeData = {
  type: 'exploration',
  key: 'cornerstone',
  setTitleId: [654],
  name: [
    { alignment: 'hero', value: 'Cornerstone' },
    { alignment: 'villain', value: 'Weak Point' },
  ],
  morality: 'paragon-city-access',
  badgeText: 'The Freedom Phalanx and WISDOM stopped a massive Banished Pantheon attack in this area.',
  notes: `Located on the ground just left (west) of the warehouse building in the northeastern corner of the zone, between the two right (eastern) legs of a large power line tower.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Cornerstone Badge', href: 'https://homecoming.wiki/wiki/Cornerstone_Badge' },
    { title: 'Weak Point Badge', href: 'https://homecoming.wiki/wiki/Weak_Point_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SafeguardBrickstown.key, coords: [-406, 0, -130] }, vidiotMapKey: '1' },
  ],
}
