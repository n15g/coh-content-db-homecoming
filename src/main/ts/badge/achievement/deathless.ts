import { BadgeData } from 'coh-content-db'

export const Deathless: BadgeData = {
  type: 'achievement',
  key: 'deathless',
  setTitleId: [233, 1684],
  name: [
    { value: 'Deathless' },
    { alignment: 'praetorian', value: 'Impulsive' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have proven that you are Deathless in your pursuit against evil.' },
    { alignment: 'villain', value: 'You have proven that you are Deathless in your pursuit of evil.' },
    { alignment: 'praetorian', value: `Perhaps TPN was right when they said Praetoria would never die. At least when it comes to you, it's holding up.` },
  ],
  acquisition: 'Pay off 400,000 debt.',
  links: [
    { title: 'Deathless Badge', href: 'https://homecoming.wiki/wiki/Deathless_Badge' },
    { title: 'Impulsive Badge', href: 'https://homecoming.wiki/wiki/Impulsive_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
