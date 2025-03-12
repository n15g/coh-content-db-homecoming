import { BadgeData } from 'coh-content-db'

export const FaceTurn: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'face-turn',
  setTitle: { id: 2521 },
  name: [
    { value: 'Face Turn' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You witnessed what Bile swears is the truth, and navigated a recording of Piecemeal's final moments, marooned in Galaxy City amidst the beginning of a horrific invasion.` },
  ],
  acquisition: `Complete Piecemeal's personal story.`,
  links: [
    { title: 'Face Turn Badge', href: 'https://homecoming.wiki/wiki/Face_Turn_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/face-turn.png' },
  ],
}
