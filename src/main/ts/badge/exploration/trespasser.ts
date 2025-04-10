import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Trespasser: BadgeData = {
  type: 'exploration',
  key: 'trespasser',
  setTitleId: [748],
  name: 'Trespasser',
  morality: 'all',
  badgeText: 'You have managed to get into the Crey base of operations. Nice work. Now how do you plan to get out?',
  notes: `Located in The Bulge neighborhood, 290 yards southwest of the area marker.

Look for two Crey logos on a building. The badge is on the ground in the open on the left hand side of that building, and usually has Crey mobs on top of, or nearby it.`,
  links: [
    { title: 'Trespasser Badge', href: 'https://homecoming.wiki/wiki/Trespasser_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: RiktiWarZone.key, coords: [978, 2, -737], icon: 'badge', iconText: '2' } },
  ],
}
