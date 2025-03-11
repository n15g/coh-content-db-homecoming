import { BadgeData } from 'coh-content-db'

export const Jailed: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'jailed',
  setTitle: { id: 241, praetorianId: 1698 },
  name: [
    { value: 'Jailed' },
    { alignment: 'P', value: 'Lagged' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'Enemies no longer regard you as a threat.' },
    {
      alignment: 'P', value: 'You\'ve spent so much time held, slept, immobilized, encased in goo, et cetera, that it now '
        + 'seems to take you two seconds to do something it takes others only one. Perhaps you should see '
        + 'someone about it?',
    },
  ],
  acquisition: 'Be held for 12 hours',
  links: [
    { title: 'Jailed Badge', href: 'https://homecoming.wiki/wiki/Jailed_Badge' },
    { title: 'Lagged Badge', href: 'https://homecoming.wiki/wiki/Lagged_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
