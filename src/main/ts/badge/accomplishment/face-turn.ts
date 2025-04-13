import { BadgeData } from 'coh-content-db'
import { ASecondChanceAtAFirstImpression } from '../../mission/a-second-chance-at-a-first-impression'

export const FaceTurn: BadgeData = {
  type: 'accomplishment',
  key: 'face-turn',
  setTitleId: [2521],
  name: 'Face Turn',
  morality: 'all',
  badgeText: `You witnessed what Bile swears is the truth, and navigated a recording of Piecemeal's final moments, marooned in Galaxy City amidst the beginning of a horrific invasion.`,
  links: [
    { title: 'Face Turn Badge', href: 'https://homecoming.wiki/wiki/Face_Turn_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/face-turn.png',
  requirements: [
    { key: ASecondChanceAtAFirstImpression.key, type: 'mission', missionKey: ASecondChanceAtAFirstImpression.key },
  ],
}
