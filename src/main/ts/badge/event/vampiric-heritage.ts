import { BadgeData } from 'coh-content-db'

export const VampiricHeritage: BadgeData = {
  type: 'event',
  key: 'vampiric-heritage',
  setTitleId: [2503],
  name: 'Vampiric Heritage',
  morality: 'all',
  badgeText: `You have defeated 5 ancient vampires, the eldest of the vampires in the ancestral lineage of those who thirst for blood in the darkness.`,
  acquisition: `Defeat 5 Ancient Vampires during the Halloween event.`,
  effect: `Awards 2 prismatic aether particles.`,
  links: [
    { title: 'Vampiric Heritage Badge', href: 'https://homecoming.wiki/wiki/Vampiric_Heritage_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/vampiric-heritage.png',
}
