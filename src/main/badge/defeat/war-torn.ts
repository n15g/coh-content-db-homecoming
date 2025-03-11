import { BadgeData } from 'coh-content-db'

export const WarTorn: BadgeData = {
  type: 'DEFEAT',
  key: 'war-torn',
  setTitle: { id: 2332 },
  name: [
    { value: 'War Torn' },
  ],
  alignment: ['H'],
  badgeText: [{ value: `You have torn the Council War Walkers into scrap metal.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/council-war-walker.png' }],
  acquisition: 'Defeat 100 Council War Walkers in Boomtown',
  links: [
    { title: 'War Torn Badge', href: 'https://homecoming.wiki/wiki/War_Torn_Badge' },
  ],
}
