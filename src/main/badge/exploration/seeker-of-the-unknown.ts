import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'

export const SeekerOfTheUnknown: BadgeData = {
  type: 'exploration',
  key: 'seeker-of-the-unknown',
  setTitleId: [129],
  name: 'Seeker of the Unknown',
  morality: 'heroic',
  zoneKey: EchoDarkAstoria.key,
  loc: [1868, -80, 1352],
  badgeText: `This tomb was used to represent the thousands of heroes who gave their lives in the Rikti War. It now stands a mute vigil at the site of even greater atrocities.`,
  notes: `Located in ${zoneLink(EchoDarkAstoria)} 160 yards west, and very slightly north, of the Moth Cemetery marker is a deep chasm.

At the bottom of that chasm is a doorway that leads into a tunnel. The badge marker is outside the second (middle) crypt in that tunnel.`,
  links: [
    { title: 'Seeker of the Unknown Badge', href: 'https://homecoming.wiki/wiki/Seeker_of_the_Unknown_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '2',
}
