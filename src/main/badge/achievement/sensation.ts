import { BadgeData } from 'coh-content-db'

export const Sensation: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'sensation',
  setTitle: { id: 6, praetorianId: 1700 },
  name: [
    { alignment: 'H', value: 'Sensation' },
    { alignment: 'V', sex: 'M', value: 'Mr. Big' },
    { alignment: 'V', sex: 'F', value: 'Ms. Big' },
    { alignment: 'P', value: 'Acclaimed' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Dinner at the White House is passe for you now.' },
    { alignment: 'V', value: 'You\'ve earned enough Infamy to run your own crews.' },
    {
      alignment: 'P', value: 'There\'s a certain allure in knowing that as your stockpile of resources and contacts grow, it '
        + 'will make your future challenges that much easier.',
    },
  ],
  acquisition: 'Earn 2,500,000 influence',
  links: [
    { title: 'Sensation Badge', href: 'https://homecoming.wiki/wiki/Sensation_Badge' },
    { title: 'Mr. Big Badge', href: 'https://homecoming.wiki/wiki/Mr._Big_Badge' },
    { title: 'Ms. Big Badge', href: 'https://homecoming.wiki/wiki/Ms._Big_Badge' },
    { title: 'Acclaimed Badge', href: 'https://homecoming.wiki/wiki/Acclaimed_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
