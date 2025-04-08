import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { PayPhone } from '../../contact/pay-phone'

export const FaceTurn: BadgeData = {
  type: 'accomplishment',
  key: 'face-turn',
  setTitleId: [2521],
  name: 'Face Turn',
  morality: 'all',
  badgeText: `You witnessed what Bile swears is the truth, and navigated a recording of Piecemeal's final moments, marooned in Galaxy City amidst the beginning of a horrific invasion.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "A Second Chance at a First Impression" entry with number 27.15 at level 50.`,
  links: [
    { title: 'Face Turn Badge', href: 'https://homecoming.wiki/wiki/Face_Turn_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/face-turn.png',
  requirements: [
    { key: 'a-second-chance-at-a-first-impression', type: 'MISSION', missionName: 'A Second Chance at a First Impression', contactKey: PayPhone.key },
  ],
}
