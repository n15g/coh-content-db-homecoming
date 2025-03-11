import { BadgeData } from 'coh-content-db'

export const Bounty: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'bounty',
  setTitle: { id: 2362 },
  name: [
    { value: 'Bounty' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/bounty.png' }],
  badgeText: [
    { value: 'You have held on to a few souvenirs that remind you of your interesting adventures.' },
  ],
  acquisition: 'Collect 10 Souvenirs',
  links: [
    { title: 'Bounty Badge', href: 'https://homecoming.wiki/wiki/Bounty_Badge' },
  ],
}
