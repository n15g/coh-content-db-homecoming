import { BadgeData } from 'coh-content-db'

export const Legatus: BadgeData = {
  type: 'DEFEAT',
  key: 'legatus',
  setTitle: { id: 2471 },
  name: [
    { value: 'Legatus' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have proved yourself on the battlefield by defeating 100 Cimeroran Traitors empowered by the Path of the Dark.` },
  ],
  acquisition: `Defeat 100 Incarnate-level Cimeroran Traitors.`,
  links: [
    { title: 'Legatus Badge', href: 'https://homecoming.wiki/wiki/Legatus_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/legatus.png' },
  ],
}
