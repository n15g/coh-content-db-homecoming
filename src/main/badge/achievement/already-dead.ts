import { BadgeData } from 'coh-content-db'

export const AlreadyDead: BadgeData = {
  type: 'achievement',
  key: 'already-dead',
  setTitleId: [1764],
  name: 'Already Dead',
  morality: 'all',
  badgeText: 'Battle Maiden thought she was all powerful, but you put her down before she knew what was happening.',
  acquisition: 'Defeat Battle Maiden within 15 minutes in the Apex Task Force',
  links: [
    { title: 'Already Dead Badge', href: 'https://homecoming.wiki/wiki/Already_Dead_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-tinmage.png' },
  ],
}
