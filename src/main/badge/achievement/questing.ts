import { BadgeData } from 'coh-content-db'

export const Questing: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'questing',
  setTitle: { id: 1582, praetorianId: 1667 },
  name: [
    { value: 'Questing' },
    { alignment: 'P', value: 'Prepared' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'You\'ve experienced more in the last few years than most will in their entire lives. That said, '
        + 'you know you\'re not done yet.',
    },
    { alignment: 'V', value: 'You\'ve seen what the world has to offer, and you want it all.' },
    {
      alignment: 'P', value: 'If experience is any measure, you\'ve accomplished enough for several lifetimes. You\'d like to '
        + 'see any dimension, Primal or Praetorian, try to pull something you can\'t handle.',
    },
  ],
  acquisition: 'Earn 1000 badges',
  links: [
    { title: 'Questing Badge', href: 'https://homecoming.wiki/wiki/Questing_Badge' },
    { title: 'Prepared Badge', href: 'https://homecoming.wiki/wiki/Prepared_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/questing-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/questing-v.png' },
  ],
}
