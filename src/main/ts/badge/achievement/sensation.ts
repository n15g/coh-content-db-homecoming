import { BadgeData } from 'coh-content-db'

export const Sensation: BadgeData = {
  type: 'achievement',
  key: 'sensation',
  setTitleId: [6, 1700],
  name: [
    { alignment: 'hero', value: 'Sensation' },
    { alignment: 'villain', sex: 'M', value: 'Mr. Big' },
    { alignment: 'villain', sex: 'F', value: 'Ms. Big' },
    { alignment: 'praetorian', value: 'Acclaimed' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Dinner at the White House is passe for you now.' },
    { alignment: 'villain', value: `You've earned enough Infamy to run your own crews.` },
    { alignment: 'praetorian', value: `There's a certain allure in knowing that as your stockpile of resources and contacts grow, it will make your future challenges that much easier.` },
  ],
  acquisition: 'Earn 2,500,000 influence.',
  links: [
    { title: 'Sensation Badge', href: 'https://homecoming.wiki/wiki/Sensation_Badge' },
    { title: 'Mr. Big Badge', href: 'https://homecoming.wiki/wiki/Mr._Big_Badge' },
    { title: 'Ms. Big Badge', href: 'https://homecoming.wiki/wiki/Ms._Big_Badge' },
    { title: 'Acclaimed Badge', href: 'https://homecoming.wiki/wiki/Acclaimed_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
