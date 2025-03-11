import { BadgeData } from 'coh-content-db'

export const UnholyCoven: BadgeData = {
  type: 'EVENT',
  key: 'unholy-coven',
  setTitle: { id: 2506 },
  name: [
    { value: 'Unholy Coven' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have defeated 5 crone matriarchs, these ancient witches lead the Coven from the deep shadows, practicing forbidden sorcery unseen by the world.` },
  ],
  acquisition: `Defeat 5 Crone Matriarchs during the Halloween event.`,
  notes: `This badge rewards 2 prismatic aether particles.`,
  links: [
    { title: 'Unholy Coven Badge', href: 'https://homecoming.wiki/wiki/Unholy_Coven_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unholy-coven.png' }],
}
