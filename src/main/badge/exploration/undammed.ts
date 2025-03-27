import { BadgeData, mapLink } from 'coh-content-db'
import { Faultline } from '../../map/faultline'

export const Undammed: BadgeData = {
  type: 'EXPLORATION',
  key: 'undammed',
  setTitle: { id: 118 },
  name: [{ value: 'Undammed' }],
  alignment: ['H'],
  mapKey: Faultline.key,
  loc: [-820, -159, 1033],
  badgeText: [{ value: 'Funding has recently been passed in an effort to stop the damage caused by the leaking Paragon City Dam.' }],
  notes: `Located at the top right (northeast) corner of a building in a canyon on the east side of the zone between the borders of the Aftershock and Overflow neighborhoods of ${mapLink(Faultline)}.`,
  links: [
    { title: 'Undammed Badge', href: 'https://homecoming.wiki/wiki/Undammed_Badge' },
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
