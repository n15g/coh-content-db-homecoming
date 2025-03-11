import { BadgeData } from 'coh-content-db'

export const TheUnbrokenSpirit: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'the-unbroken-spirit',
  setTitle: { id: 17, praetorianId: 1683 },
  name: [
    { value: 'The Unbroken Spirit' },
    { alignment: 'P', value: 'Undaunted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'Your spirit can not be shattered. Though you have often been defeated, you continue to fight '
        + 'the good fight.',
    },
    { alignment: 'V', value: 'Your spirit can\'t be shattered. Those lousy heroes win a lot of battles, but the war ain\'t over yet.' },
    { alignment: 'P', value: 'You remain Undaunted by defeat. You\'re not even sure Praetoria had any daunts...' },
  ],
  acquisition: 'Pay off 200,000 debt',
  links: [
    { title: 'The Unbroken Spirit Badge', href: 'https://homecoming.wiki/wiki/The_Unbroken_Spirit_Badge' },
    { title: 'Undaunted Badge', href: 'https://homecoming.wiki/wiki/Undaunted_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
