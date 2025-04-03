import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { WillyWheeler } from '../../contact/willy-wheeler'

export const PenitentOfVice: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'penitent-of-vice',
  setTitle: { id: 334 },
  name: [
    { alignment: 'H', value: 'Penitent of Vice' },
    { alignment: 'V', value: 'Paragon of Vice' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `Paragon City still remembers the black eye you gave it to impress Arachnos, and won't soon forget.` },
    { alignment: 'V', value: 'You showed Arachnos how tough you were in Paragon City.' },
  ],
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "There's a Sucker Born Every Minute" entry with number 6.25 in the 15-19 level range. The badge is in the fourth mission.`,
  links: [
    { title: 'Penitent of Vice Badge', href: 'https://homecoming.wiki/wiki/Penitent_of_Vice_Badge' },
    { title: 'Paragon of Vice Badge', href: 'https://homecoming.wiki/wiki/Paragon_of_Vice_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-3.png',
  requirements: [
    { key: 'daap', type: 'MISSION', missionName: 'Defeat all Arachnos Personnel', contactKey: WillyWheeler.key },
  ],
}
