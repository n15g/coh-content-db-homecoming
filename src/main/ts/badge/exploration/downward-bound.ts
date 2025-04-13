import { BadgeData, zoneLink } from 'coh-content-db'
import { SewerNetwork } from '../../zone/sewer-network'
import { AtlasPark } from '../../zone/atlas-park'

export const DownwardBound: BadgeData = {
  type: 'exploration',
  key: 'downward-bound',
  setTitleId: [1834],
  name: 'Downward Bound',
  morality: 'paragon-city-access',
  badgeText: `Many fledgling heroes see Atlas Park as a mere stepping stone to the city districts beyond where greater rewards await.
Others turn their attention downwards, to the unseen avenues that underlie this famous starting location.
Not content to grandstand beneath Atlas's statue, hob-nobbing with the likes of Ms. Liberty, you understand that dark dangers live just beneath Atlas Park's streets.
You are determined to keep those dangers contained lest they stain Paragon City's glittering heart.`,
  notes: `Located 272 yards southwest of the ${zoneLink(AtlasPark)} Sector marker, in the middle of the metal walkway.`,
  links: [
    { title: 'Downward Bound Badge', href: 'https://homecoming.wiki/wiki/Downward_Bound_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SewerNetwork.key, coords: [-2756, -51, 1972], icon: 'badge', iconText: '6' } },
  ],
}
