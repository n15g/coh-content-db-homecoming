import { BadgeData } from 'coh-content-db'

export const Surgeon: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'surgeon',
  setTitle: { id: 3, praetorianId: 1688 },
  name: [
    { alignment: 'H', value: 'Surgeon' },
    { alignment: 'V', value: 'Doc' },
    { alignment: 'P', value: 'Safekeeper' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have helped your fellow heroes by healing them for one million hit points.' },
    { alignment: 'V', value: 'You\'ve healed one million points of damage. Your teammates often call you \'Doc.\'' },
    {
      alignment: 'P', value: 'By healing you keep safe those who would help you achieve your goals. You certainly have your '
        + 'priorities straight.',
    },
  ],
  acquisition: 'Heal others for 1,000,000 hit points',
  links: [
    { title: 'Surgeon Badge', href: 'https://homecoming.wiki/wiki/Surgeon_Badge' },
    { title: 'Doc Badge', href: 'https://homecoming.wiki/wiki/Doc_Badge' },
    { title: 'Safekeeper Badge', href: 'https://homecoming.wiki/wiki/Safekeeper_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
