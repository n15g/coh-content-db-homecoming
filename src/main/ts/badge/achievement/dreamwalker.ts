import { BadgeData } from 'coh-content-db'

export const Dreamwalker: BadgeData = {
  type: 'achievement',
  key: 'dreamwalker',
  setTitleId: [2079],
  name: [
    { alignment: 'hero', value: 'Dreamwalker' },
    { alignment: 'villain', value: 'Dreamkiller' },
  ],
  morality: 'all',
  badgeText: 'Through persistence or madness, you have faced down the many nightmares of Malaise while battling him in the dreamscape of the Minds of Mayhem.',
  acquisition: `Defeat all of Malaise's possible nightmares at least once during the Minds of Mayhem Trial.`,
  links: [
    { title: 'Dreamwalker Badge', href: 'https://homecoming.wiki/wiki/Dreamwalker_Badge' },
    { title: 'Dreamkiller Badge', href: 'https://homecoming.wiki/wiki/Dreamkiller_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-mom.png',
}
