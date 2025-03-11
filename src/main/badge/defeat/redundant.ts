import { BadgeData } from 'coh-content-db'

export const Redundant: BadgeData = {
  type: 'DEFEAT',
  key: 'redundant',
  setTitle: { id: 1656 },
  name: [
    { value: 'Redundant' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Destroying the Destroyers has destroyed their chance to cause destruction, even if saying out '
        + 'loud sounds a bit Redundant. Those big and strangely colored targets are hard to resist. You '
        + 'destroyed many Destroyers to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Destroyers',
  links: [
    { title: 'Redundant Badge', href: 'https://homecoming.wiki/wiki/Redundant_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/redundant.png' },
  ],
}
