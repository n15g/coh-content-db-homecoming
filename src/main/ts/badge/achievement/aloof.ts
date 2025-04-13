import { BadgeData } from 'coh-content-db'

export const Aloof: BadgeData = {
  type: 'achievement',
  key: 'aloof',
  setTitleId: [2380],
  name: 'Aloof',
  morality: 'all',
  badgeText: `Word of your accomplishments is spreading, but you don't seem to care much about it.`,
  acquisition: 'Reject 50 inspiration drops.',
  links: [
    { title: 'Aloof Badge', href: 'https://homecoming.wiki/wiki/Aloof_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png',
}
