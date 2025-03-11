import { BadgeData } from 'coh-content-db'

export const TheUnwavering: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'the-unwavering',
  setTitle: { id: 15, praetorianId: 1681 },
  name: [
    { alignment: 'H', value: 'The Unwavering' },
    { alignment: 'V', value: 'Punch Drunk' },
    { alignment: 'P', value: 'Repaired' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Though you have been defeated, you continue to fight for Paragon City.' },
    { alignment: 'V', value: 'You\'ve suffered a fair number of defeats but keep coming back for more.' },
    {
      alignment: 'P', value: 'If you were just an ordinary Clockwork, you\'d probably have been junked by now. But as it is, '
        + 'you continue to fight in honor of Praetoria.',
    },
  ],
  acquisition: 'Pay off 50,000 debt',
  links: [
    { title: 'The Unwavering Badge', href: 'https://homecoming.wiki/wiki/The_Unwavering_Badge' },
    { title: 'Punch Drunk Badge', href: 'https://homecoming.wiki/wiki/Punch_Drunk_Badge' },
    { title: 'Repaired Badge', href: 'https://homecoming.wiki/wiki/Repaired_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
