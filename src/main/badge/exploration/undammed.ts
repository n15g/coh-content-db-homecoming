import { BadgeData, zoneLink } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'

export const Undammed: BadgeData = {
  type: 'exploration',
  key: 'undammed',
  setTitleId: [118],
  name: 'Undammed',
  morality: 'heroic',
  zoneKey: Faultline.key,
  loc: [-820, -159, 1033],
  badgeText: 'Funding has recently been passed in an effort to stop the damage caused by the leaking Paragon City Dam.',
  notes: `Located at the top right (northeast) corner of a building in a canyon on the east side of the zone between the borders of the Aftershock and Overflow neighborhoods of ${zoneLink(Faultline)}.`,
  links: [
    { title: 'Undammed Badge', href: 'https://homecoming.wiki/wiki/Undammed_Badge' },
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '1',
}
