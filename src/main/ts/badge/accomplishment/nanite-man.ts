import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { Max } from '../../contact/max'

export const NaniteMan: BadgeData = {
  type: 'accomplishment',
  key: 'nanite-man',
  setTitleId: [2196],
  name: [
    { sex: 'M', value: 'Nanite Man' },
    { sex: 'F', value: 'Nanite Woman' },
  ],
  morality: 'all',
  badgeText: `You played through Max's personal story, witnessing the event where Malta recruited Battle Maiden to upgrade their technology with her nanites.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "Max's Personal Story" entry with number 22.05 at level 50.`,
  links: [
    { title: 'Nanite Man Badge', href: 'https://homecoming.wiki/wiki/Nanite_Man_Badge' },
    { title: 'Nanite Woman Badge', href: 'https://homecoming.wiki/wiki/Nanite_Woman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: 'tptn', type: 'MISSION', missionName: 'To Protect the Nation', contactKey: Max.key },
  ],
}
