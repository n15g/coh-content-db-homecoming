import { BadgeData } from 'coh-content-db'
import { SewerNetwork } from '../../map/sewer-network'
import { SteelCanyon } from '../../map/steel-canyon'

export const SpiritOfTheCity: BadgeData = {
  type: 'EXPLORATION',
  key: 'spirit-of-the-city',
  setTitle: { id: 1829 },
  name: [{ value: 'Spirit of the City' }],
  alignment: ['H'],
  mapKey: SewerNetwork.key,
  loc: [-1331, -62, -1728],
  badgeText: [{
    value: `The heartbeat of the city thrums through the halls of the Sewer Network, creating a harmony all its own.
Being down here, letting that vibration flow through you, you feel at one with the city and its people.
If you are able, open your mind to the life of the city all around you, become one with it.
True understanding lies in part with becoming what you wish to understand, and down here all that the city is flows to this central point: its soul.`,
  }],
  notes: `Located in [map:${SewerNetwork.key}] 179 yards west of the [map:${SteelCanyon.key}] marker, straight back from the entrance.`,
  links: [
    { title: 'Spirit of the City Badge', href: 'https://homecoming.wiki/wiki/Spirit_of_the_City_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
