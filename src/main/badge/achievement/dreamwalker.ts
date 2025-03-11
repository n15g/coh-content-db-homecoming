import { BadgeData } from 'coh-content-db'

export const Dreamwalker: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'dreamwalker',
  setTitle: { id: 2079 },
  name: [
    { alignment: 'H', value: 'Dreamwalker' },
    { alignment: 'V', value: 'Dreamkiller' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Through persistence or madness, you have faced down the many nightmares of Malaise while '
        + 'battling him in the dreamscape of the Minds of Mayhem.',
    },
  ],
  acquisition: 'Defeat all of Malaise\'s possible nightmares at least once during the Minds of Mayhem Trial',
  links: [
    { title: 'Dreamwalker Badge', href: 'https://homecoming.wiki/wiki/Dreamwalker_Badge' },
    { title: 'Dreamkiller Badge', href: 'https://homecoming.wiki/wiki/Dreamkiller_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-mom.png' },
  ],
}
