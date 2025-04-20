import { BadgeData } from 'coh-content-db'

export const Celebrity: BadgeData = {
  type: 'achievement',
  key: 'celebrity',
  setTitleId: [5, 1699],
  name: [
    { alignment: 'hero', value: 'Celebrity' },
    { alignment: 'villain', value: 'Bling' },
    { alignment: 'praetorian', value: `Who's Who` },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Talk shows are calling you all the time.' },
    { alignment: 'villain', value: `You've earned enough Infamy to sport a little bling.` },
    { alignment: 'praetorian', value: `You've earned an entry in "Who's Who in Praetoria." You can't help but wonder if this just makes you a bigger target for your enemies.` },
  ],
  acquisition: 'Earn 500,000 influence.',
  links: [
    { title: 'Celebrity Badge', href: 'https://homecoming.wiki/wiki/Celebrity_Badge' },
    { title: 'Bling Badge', href: 'https://homecoming.wiki/wiki/Bling_Badge' },
    { title: `Who's Who Badge`, href: 'https://homecoming.wiki/wiki/Who%27s_Who_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
