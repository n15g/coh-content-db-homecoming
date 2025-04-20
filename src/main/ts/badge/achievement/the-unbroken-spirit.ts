import { BadgeData } from 'coh-content-db'

export const TheUnbrokenSpirit: BadgeData = {
  type: 'achievement',
  key: 'the-unbroken-spirit',
  setTitleId: [17, 1683],
  name: [
    { value: 'The Unbroken Spirit' },
    { alignment: 'praetorian', value: 'Undaunted' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Your spirit can not be shattered. Though you have often been defeated, you continue to fight the good fight.' },
    { alignment: 'villain', value: `Your spirit can't be shattered. Those lousy heroes win a lot of battles, but the war ain't over yet.` },
    { alignment: 'praetorian', value: `You remain Undaunted by defeat. You're not even sure Praetoria had any daunts...` },
  ],
  acquisition: 'Pay off 200,000 debt.',
  links: [
    { title: 'The Unbroken Spirit Badge', href: 'https://homecoming.wiki/wiki/The_Unbroken_Spirit_Badge' },
    { title: 'Undaunted Badge', href: 'https://homecoming.wiki/wiki/Undaunted_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
