import { BadgeData } from 'coh-content-db'

export const Untouchable: BadgeData = {
  type: 'DEFEAT',
  key: 'untouchable',
  setTitle: { id: 45 },
  name: [
    { value: 'Untouchable' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have shown that no matter the bribe or threat, you will stand before organized criminals '
        + 'and take them on.',
    },
  ],
  acquisition: 'Defeat 100 bosses of The Family, of any kind.',
  links: [
    { title: 'Untouchable Badge', href: 'https://homecoming.wiki/wiki/Untouchable_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/untouchable.png' },
  ],
}
