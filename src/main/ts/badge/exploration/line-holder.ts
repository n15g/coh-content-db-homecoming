import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const LineHolder: BadgeData = {
  type: 'exploration',
  key: 'line-holder',
  setTitleId: [1512],
  name: 'Line Holder',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `Arachnos stationed here are the first line of defense against any Arachnoids trying to break out of the Gutter.
Arachnoids foolish enough to attempt an attack from above ground never succeed, though it's well known that most Arachnoids utilize their own underground tunnels to travel.`,
  notes: `Located in the Gutter neighborhood, at the gate between the North and East Wards, 64 yards ENE of the East Ward 2 Lift marker.`,
  links: [
    { title: 'Line Holder Badge', href: 'https://homecoming.wiki/wiki/Line_Holder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Grandville.key, coords: [1728, -400, 656], icon: 'badge', iconText: '7' } },
  ],
}
