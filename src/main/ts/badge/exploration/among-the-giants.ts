import { BadgeData, zoneLink } from 'coh-content-db'
import { TheHive } from '../../zone/the-hive'
import { Eden } from '../../zone/eden'

export const AmongTheGiants: BadgeData = {
  type: 'exploration',
  key: 'among-the-giants',
  setTitleId: [1851],
  name: 'Among the Giants',
  morality: 'paragon-city-access',
  badgeText: `You've never seen such hulking monstrosities this close up before, and even with the great power you've amassed in your career it is hard not to be a little intimidated.
Their massive size blots out the sun and the roars they emit rattle the teeth and drive one close to madness.`,
  notes: `Located 868 yards northwest of the ${zoneLink(Eden)} transfer point, between a cliff and spire beyond the northeast edge of the crater.`,
  links: [
    { title: 'Among the Giants Badge', href: 'https://homecoming.wiki/wiki/Among_the_Giants_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHive.key, coords: [-1183, 0, -2849], icon: 'badge', iconText: '6' } },
  ],
}
