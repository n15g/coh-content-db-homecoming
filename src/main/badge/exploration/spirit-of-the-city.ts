import { BadgeData, zoneLink } from 'coh-content-db'
import { SewerNetwork } from '../../zone/sewer-network'
import { SteelCanyon } from '../../zone/steel-canyon'

export const SpiritOfTheCity: BadgeData = {
  type: 'exploration',
  key: 'spirit-of-the-city',
  setTitleId: [1829],
  name: 'Spirit of the City',
  morality: 'heroic',
  zoneKey: SewerNetwork.key,
  loc: [-1331, -62, -1728],
  badgeText: [{
    value: `
The heartbeat of the city thrums through the halls of the Sewer Network, creating a harmony all its own.
Being down here, letting that vibration flow through you, you feel at one with the city and its people.
If you are able, open your mind to the life of the city all around you, become one with it.
True understanding lies in part with becoming what you wish to understand, and down here all that the city is flows to this central point: its soul.`,
  }],
  notes: `Located in ${zoneLink(SewerNetwork)} 179 yards west of the ${zoneLink(SteelCanyon)} marker, straight back from the entrance.`,
  links: [
    { title: 'Spirit of the City Badge', href: 'https://homecoming.wiki/wiki/Spirit_of_the_City_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '1',
}
