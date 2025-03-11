import { BadgeData } from 'coh-content-db'

export const ToyCollector: BadgeData = {
  type: 'EVENT',
  key: 'toy-collector',
  setTitle: { id: 522 },
  name: [
    { value: 'Toy Collector' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have amassed a vast collection of holiday gifts!' },
  ],
  acquisition: 'Open a total of 200 presents spread throughout Paragon City, the Rogue Isles, and Praetoria during the Winter Event.',
  links: [
    { title: 'Toy Collector Badge', href: 'https://homecoming.wiki/wiki/Toy_Collector_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/toy-collector.png' }],
}
