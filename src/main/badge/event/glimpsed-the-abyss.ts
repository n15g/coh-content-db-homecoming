import { BadgeData } from 'coh-content-db'

export const GlimpsedTheAbyss: BadgeData = {
  type: 'EVENT',
  key: 'glimpsed-the-abyss',
  setTitle: { id: 1020 },
  name: [
    { value: 'Glimpsed the Abyss' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve taken down 100 Zombie Minions, showing you have Glimpsed the Abyss.' },
  ],
  acquisition: 'Defeat 100 Zombie minions during Zombie Apocalypses.',
  links: [
    { title: 'Glimpsed the Abyss Badge', href: 'https://homecoming.wiki/wiki/Glimpsed_the_Abyss_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/glimpsed-the-abyss.png' }],
}
