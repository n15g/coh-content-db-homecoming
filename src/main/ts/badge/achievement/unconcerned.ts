import { BadgeData } from 'coh-content-db'

export const Unconcerned: BadgeData = {
  type: 'achievement',
  key: 'unconcerned',
  setTitleId: [2381],
  name: 'Unconcerned',
  morality: 'all',
  badgeText: 'Your skill and ability is recognized far and wide, but you appear quite indifferent.',
  acquisition: 'Reject 100 inspiration drops.',
  links: [
    { title: 'Unconcerned Badge', href: 'https://homecoming.wiki/wiki/Unconcerned_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png',
}
