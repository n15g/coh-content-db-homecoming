import { BadgeData } from 'coh-content-db'
import { RevelationRiktiFactions } from '../../mission/revelation-rikti-factions'

export const TraditionalistFoil: BadgeData = {
  type: 'accomplishment',
  key: 'traditionalist-foil',
  setTitleId: [2499],
  name: 'Traditionalist Foil',
  releaseDate: '2020-11-26',
  morality: 'heroic',
  badgeText: `You learned about the two core Rikti factions, Traditionalist and Restructurist, while foiling a plot to mutate humans into Traditionalist conscripts.`,
  links: [
    { title: 'Traditionalist Foil Badge', href: 'https://homecoming.wiki/wiki/Traditionalist_Foil_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/traditionalist-foil.png',
  requirements: [
    { key: RevelationRiktiFactions.key, type: 'mission', missionKey: RevelationRiktiFactions.key },
  ],
}
