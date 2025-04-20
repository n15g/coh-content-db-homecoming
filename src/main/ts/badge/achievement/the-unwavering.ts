import { BadgeData } from 'coh-content-db'

export const TheUnwavering: BadgeData = {
  type: 'achievement',
  key: 'the-unwavering',
  setTitleId: [15, 1681],
  name: [
    { alignment: 'hero', value: 'The Unwavering' },
    { alignment: 'villain', value: 'Punch Drunk' },
    { alignment: 'praetorian', value: 'Repaired' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Though you have been defeated, you continue to fight for Paragon City.' },
    { alignment: 'villain', value: `You've suffered a fair number of defeats but keep coming back for more.` },
    { alignment: 'praetorian', value: `If you were just an ordinary Clockwork, you'd probably have been junked by now. But as it is, you continue to fight in honor of Praetoria.` },
  ],
  acquisition: 'Pay off 50,000 debt.',
  links: [
    { title: 'The Unwavering Badge', href: 'https://homecoming.wiki/wiki/The_Unwavering_Badge' },
    { title: 'Punch Drunk Badge', href: 'https://homecoming.wiki/wiki/Punch_Drunk_Badge' },
    { title: 'Repaired Badge', href: 'https://homecoming.wiki/wiki/Repaired_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
