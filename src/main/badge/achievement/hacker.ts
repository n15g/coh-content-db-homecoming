import { BadgeData } from 'coh-content-db'

export const Hacker: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'hacker',
  setTitle: { id: 1761 },
  name: [
    { value: 'Hacker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You managed to destroy the War Walkers within the secret Praetorian warehouse before the '
        + 'security team could be activated.',
    },
  ],
  acquisition: 'Click all 8 devices within 30 seconds of entering the warehouse in the first mission of the Tin Mage Mark II Task Force',
  links: [
    { title: 'Hacker Badge', href: 'https://homecoming.wiki/wiki/Hacker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-alpha.png' },
  ],
}
