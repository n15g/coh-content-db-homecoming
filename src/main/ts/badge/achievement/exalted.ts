import { BadgeData } from 'coh-content-db'

export const Exalted: BadgeData = {
  type: 'achievement',
  key: 'exalted',
  setTitleId: [235, 1686],
  name: [
    { value: 'Exalted' },
    { alignment: 'praetorian', value: 'Infinite Lives' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { value: 'You are truly Exalted and blessed by a higher being.' },
    { alignment: 'praetorian', value: `Maybe when you are about to die, Death gets confused and finds another dimension's version of you to claim instead. That would explain it.` },
  ],
  acquisition: 'Pay off 1,000,000 debt.',
  links: [
    { title: 'Exalted Badge', href: 'https://homecoming.wiki/wiki/Exalted_Badge' },
    { title: 'Infinite Lives Badge', href: 'https://homecoming.wiki/wiki/Infinite_Lives_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
