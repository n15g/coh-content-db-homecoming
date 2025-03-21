import { BadgeData } from 'coh-content-db'

export const PhonedItIn: BadgeData = {
  type: 'OUROBOROS',
  key: 'phoned-it-in',
  setTitle: { id: 921 },
  name: [
    { value: 'Phoned it in' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 35 and 39 while not using Inspirations.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 35 and 39 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Phoned it in Badge', href: 'https://homecoming.wiki/wiki/Phoned_It_In_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/phoned-it-in.png' }],
}
