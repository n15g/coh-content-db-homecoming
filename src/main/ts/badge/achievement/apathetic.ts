import { BadgeData } from 'coh-content-db'

export const Apathetic: BadgeData = {
  type: 'achievement',
  key: 'apathetic',
  setTitleId: [2382],
  name: 'Apathetic',
  morality: 'all',
  badgeText: `The world looks at your achievements in awe, but you remain impassive.`,
  acquisition: 'Reject 500 inspiration drops.',
  links: [
    { title: 'Apathetic Badge', href: 'https://homecoming.wiki/wiki/Apathetic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png',
}
