import { BadgeData, zoneLink } from 'coh-content-db'
import { TheHive } from '../../zone/the-hive'
import { Eden } from '../../zone/eden'

export const AmongTheGiants: BadgeData = {
  type: 'EXPLORATION',
  key: 'among-the-giants',
  setTitle: { id: 1851 },
  name: [{ value: 'Among the Giants' }],
  alignment: ['H'],
  zoneKey: TheHive.key,
  loc: [-1183, 0, -2849],
  badgeText: [{
    value: `You've never seen such hulking monstrosities this close up before, and even with the great power you've amassed in your career it is hard not to be a little intimidated.
Their massive size blots out the sun and the roars they emit rattle the teeth and drive one close to madness.`,
  }],
  notes: `Located in ${zoneLink(TheHive)} 868 yards northwest of the ${zoneLink(Eden)} transfer point, between a cliff and spire beyond the northeast edge of the crater.`,
  links: [
    { title: 'Among the Giants Badge', href: 'https://homecoming.wiki/wiki/Among_the_Giants_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '6',
}
