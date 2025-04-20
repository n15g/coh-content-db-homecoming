import { BadgeData } from 'coh-content-db'

export const MadeAStand: BadgeData = {
  type: 'accomplishment',
  key: 'made-a-stand',
  setTitleId: [1446],
  name: 'Made a Stand',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Your morality has been demonstrated to all, at least for today. You completed a Morality Mission to earn this badge.' },
    { alignment: 'villain', value: 'You strove for what you believe in and, against all odds, came out on top.' },
  ],
  acquisition: 'Complete a [Morality Mission](https://homecoming.wiki/wiki/Morality_Mission) through [Tips](https://homecoming.wiki/wiki/Tip).',
  links: [
    { title: 'Made a Stand Badge', href: 'https://homecoming.wiki/wiki/Made_a_Stand_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/made-a-stand-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/made-a-stand-v.png' },
  ],
}
