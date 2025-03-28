import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'

export const SeekerOfTheUnknown: BadgeData = {
  type: 'EXPLORATION',
  key: 'seeker-of-the-unknown',
  setTitle: { id: 129 },
  name: [{ value: 'Seeker of the Unknown' }],
  alignment: ['H'],
  zoneKey: EchoDarkAstoria.key,
  loc: [1868, -80, 1352],
  badgeText: [{
    value: 'This tomb was used to represent the thousands of heroes who gave their lives in the Rikti War. It now stands a mute vigil at the site of even greater atrocities.',
  }],
  notes: `Located in ${zoneLink(EchoDarkAstoria)} 160 yards west, and very slightly north, of the Moth Cemetery marker is a deep chasm.

          At the bottom of that chasm is a doorway that leads into a tunnel. The badge marker is outside the second (middle) crypt in that tunnel.`,
  links: [
    { title: 'Seeker of the Unknown Badge', href: 'https://homecoming.wiki/wiki/Seeker_of_the_Unknown_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
