import { BadgeData, mapLink } from 'coh-content-db'
import { SewerNetwork } from '../../map/sewer-network'
import { AtlasPark } from '../../map/atlas-park'

export const DownwardBound: BadgeData = {
  type: 'EXPLORATION',
  key: 'downward-bound',
  setTitle: { id: 1834 },
  name: [{ value: 'Downward Bound' }],
  alignment: ['H'],
  mapKey: SewerNetwork.key,
  loc: [-2756, -51, 1972],
  badgeText: [{
    value: `Many fledgling heroes see Atlas Park as a mere stepping stone to the city districts beyond where greater rewards await.
Others turn their attention downwards, to the unseen avenues that underlie this famous starting location.
Not content to grandstand beneath Atlas's statue, hob-nobbing with the likes of Ms. Liberty, you understand that dark dangers live just beneath Atlas Park's streets.
You are determined to keep those dangers contained lest they stain Paragon City's glittering heart.`,
  }],
  notes: `Located in ${mapLink(SewerNetwork)} 272 yards southwest of the ${mapLink(AtlasPark)} Sector marker, in the middle of the metal walkway.`,
  links: [
    { title: 'Downward Bound Badge', href: 'https://homecoming.wiki/wiki/Downward_Bound_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '6',
}
