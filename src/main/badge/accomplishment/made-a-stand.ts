import { BadgeData } from 'coh-content-db'

export const MadeAStand: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'made-a-stand',
  setTitle: { id: 1446 },
  name: [
    { value: 'Made a Stand' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'Your morality has been demonstrated to all, at least for today. You completed a Morality '
        + 'Mission to earn this badge.',
    },
    { alignment: 'V', value: 'You strove for what you believe in and, against all odds, came out on top.' },
  ],
  acquisition: 'Complete a Morality Mission through Tips  Requires Going Rogue.',
  links: [
    { title: 'Made a Stand Badge', href: 'https://homecoming.wiki/wiki/Made_a_Stand_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/made-a-stand-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/made-a-stand-v.png' },
  ],
}
