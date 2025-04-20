import { BadgeData } from 'coh-content-db'

export const Jailed: BadgeData = {
  type: 'achievement',
  key: 'jailed',
  setTitleId: [241, 1698],
  name: [
    { value: 'Jailed' },
    { alignment: 'praetorian', value: 'Lagged' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { value: 'Enemies no longer regard you as a threat.' },
    { alignment: 'praetorian', value: `You've spent so much time held, slept, immobilized, encased in goo, et cetera, that it now seems to take you two seconds to do something it takes others only one. Perhaps you should see ` },
  ],
  acquisition: 'Be held for 12 hours.',
  links: [
    { title: 'Jailed Badge', href: 'https://homecoming.wiki/wiki/Jailed_Badge' },
    { title: 'Lagged Badge', href: 'https://homecoming.wiki/wiki/Lagged_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
