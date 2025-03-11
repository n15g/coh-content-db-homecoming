import { BadgeData } from 'coh-content-db'

export const Zookeeper: BadgeData = {
  type: 'DEFEAT',
  key: 'zookeeper',
  setTitle: { id: 50 },
  name: [
    { value: 'Zookeeper' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have earned the title Zookeeper by defeating the hordes of Ruin Monkeys that plague '
        + 'Paragon City.',
    },
  ],
  acquisition: 'Defeat 1000 Rikti monkeys',
  links: [
    { title: 'Zookeeper Badge', href: 'https://homecoming.wiki/wiki/Zookeeper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/zookeeper.png' },
  ],
}
