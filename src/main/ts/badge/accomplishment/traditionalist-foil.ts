import { BadgeData, zoneLink } from 'coh-content-db'
import { StevenSheridan } from '../../contact/steven-sheridan'
import { Ouroboros } from '../../zone/ouroboros'

export const TraditionalistFoil: BadgeData = {
  type: 'accomplishment',
  key: 'traditionalist-foil',
  setTitleId: [2499],
  name: 'Traditionalist Foil',
  morality: 'heroic',
  badgeText: `You learned about the two core Rikti factions, Traditionalist and Restructurist, while foiling a plot to mutate humans into Traditionalist conscripts.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Revelation: Rikti Factions" entry with number 0.43 in the 35-39 level range.`,
  links: [
    { title: 'Traditionalist Foil Badge', href: 'https://homecoming.wiki/wiki/Traditionalist_Foil_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/traditionalist-foil.png',
  requirements: [
    { key: 'stra', type: 'MISSION', missionName: 'Stop the Rikti Assault', contactKey: StevenSheridan.key },
  ],
}
