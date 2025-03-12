import { BadgeData } from 'coh-content-db'

export const Celebrity: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'celebrity',
  setTitle: { id: 5, praetorianId: 1699 },
  name: [
    { alignment: 'H', value: 'Celebrity' },
    { alignment: 'V', value: 'Bling' },
    { alignment: 'P', value: 'Who\'s Who' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Talk shows are calling you all the time.' },
    { alignment: 'V', value: 'You\'ve earned enough Infamy to sport a little bling.' },
    {
      alignment: 'P', value: 'You\'ve earned an entry in "Who\'s Who in Praetoria." You can\'t help but wonder if this just '
        + 'makes you a bigger target for your enemies.',
    },
  ],
  acquisition: 'Earn 500,000 influence',
  links: [
    { title: 'Celebrity Badge', href: 'https://homecoming.wiki/wiki/Celebrity_Badge' },
    { title: 'Bling Badge', href: 'https://homecoming.wiki/wiki/Bling_Badge' },
    { title: 'Who\'s Who Badge', href: 'https://homecoming.wiki/wiki/Who%27s_Who_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
