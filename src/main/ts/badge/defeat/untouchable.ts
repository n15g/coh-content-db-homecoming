import { BadgeData } from 'coh-content-db'

export const Untouchable: BadgeData = {
  type: 'defeat',
  key: 'untouchable',
  setTitleId: [45],
  name: 'Untouchable',
  morality: 'all',
  badgeText: `You have shown that no matter the bribe or threat, you will stand before organized criminals and take them on.`,
  acquisition: 'Defeat 100 bosses of The Family, of any kind.',
  links: [
    { title: 'Untouchable Badge', href: 'https://homecoming.wiki/wiki/Untouchable_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/untouchable.png',
}
