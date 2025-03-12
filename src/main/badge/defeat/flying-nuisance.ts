import { BadgeData } from 'coh-content-db'

export const FlyingNuisance: BadgeData = {
  type: 'DEFEAT',
  key: 'flying-nuisance',
  setTitle: { id: 2444 },
  name: [
    { value: 'Flying Nuisance' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have dispersed hundreds of scavenging Natterlings and sent them back empty handed to the Factory Cubes.` },
  ],
  acquisition: 'Defeat 500 Rularuu Natterlings.',
  links: [
    { title: 'Flying Nuisance Badge', href: 'https://homecoming.wiki/wiki/Flying_Nuisance_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/flying-nuisance.png' },
  ],
}
