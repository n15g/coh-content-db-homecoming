import { BadgeData } from 'coh-content-db'

export const Surgeon: BadgeData = {
  type: 'achievement',
  key: 'surgeon',
  setTitleId: [3, 1688],
  name: [
    { alignment: 'hero', value: 'Surgeon' },
    { alignment: 'villain', value: 'Doc' },
    { alignment: 'praetorian', value: 'Safekeeper' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have helped your fellow heroes by healing them for one million hit points.' },
    { alignment: 'villain', value: `You've healed one million points of damage. Your teammates often call you 'Doc.'` },
    { alignment: 'praetorian', value: 'By healing you keep safe those who would help you achieve your goals. You certainly have your priorities straight.' },
  ],
  acquisition: 'Heal others for 1,000,000 hit points.',
  links: [
    { title: 'Surgeon Badge', href: 'https://homecoming.wiki/wiki/Surgeon_Badge' },
    { title: 'Doc Badge', href: 'https://homecoming.wiki/wiki/Doc_Badge' },
    { title: 'Safekeeper Badge', href: 'https://homecoming.wiki/wiki/Safekeeper_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
