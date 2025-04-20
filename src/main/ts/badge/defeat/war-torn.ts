import { BadgeData, zoneLink } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const WarTorn: BadgeData = {
  type: 'defeat',
  key: 'war-torn',
  setTitleId: [2332],
  name: 'War Torn',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have torn the Council War Walkers into scrap metal.`,
  acquisition: `Defeat 100 Council War Walkers in ${zoneLink(Boomtown)}.`,
  links: [
    { title: 'War Torn Badge', href: 'https://homecoming.wiki/wiki/War_Torn_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/council-war-walker.png',
}
