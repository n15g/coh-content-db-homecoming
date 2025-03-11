import { BadgeData } from 'coh-content-db'

export const Centurion: BadgeData = {
  type: 'DEFEAT',
  key: 'centurion',
  setTitle: { id: 994 },
  name: [
    { value: 'Centurion' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have proved yourself on the battlefield by defeating 100 Cimeroran Traitors.' },
  ],
  acquisition: 'Defeat 100 Cimeroran Traitors',
  links: [
    { title: 'Centurion Badge', href: 'https://homecoming.wiki/wiki/Centurion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/centurion.png' },
  ],
}
