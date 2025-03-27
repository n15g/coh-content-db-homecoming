import { BadgeData, mapLink } from 'coh-content-db'
import { Praetoria } from '../../map/praetoria'
import { Neutropolis } from '../../map/neutropolis'
import { NovaPraetoria } from '../../map/nova-praetoria'
import { ImperialCity } from '../../map/imperial-city'

export const RiverRat: BadgeData = {
  type: 'EXPLORATION',
  key: 'river-rat',
  setTitle: { id: 1405 },
  name: [{ value: 'River Rat' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Praetoria.key,
  badgeText: [{
    value: 'An invigorating swim in the rich, clear waters of Praetoria always perks you up.',
  }],
  notes: `The River Rat Badge has 19 locations in Praetoria, most of which are located under the bridges scattered throughout the zone.
          In locations not covered by a bridge, look for the life buoys. There are no exact coordinates for these badges; however, they can be approximated by traveling to the locations indicated on the image below.
          You will not receive the standard "Badge Earned" notification at each location. Instead, open your "Badges" window and select the category, "Closest to Completion".
          Every time that a waypoint is reached successfully, the badge status will move up the rung towards the top. It is necessary to visit all 19 locations to earn this badge.

          This badge can be frustrating to get. Where possible, go under bridges in the water; you cannot hit the target location when on the bridge.
          The two easterly locations in ${mapLink(Neutropolis)} have bridges that are flush to the water surface; the locations are just off to one side of the bridge.

          It can also matter which zone you are in; the locations on the border between ${mapLink(NovaPraetoria)} and ${mapLink(ImperialCity)} can be approached in either zone.
          Of these four, the northernmost should be approached while in ${mapLink(NovaPraetoria)}; the others should be approached while in ${mapLink(ImperialCity)}, as should those on the ${mapLink(ImperialCity)} - ${mapLink(Neutropolis)} border.

          It is best to do this badge as soon as you arrive in Praetoria, even if you are very low level. There are no enemies in the water, and the method of watching "Closest to Completion" change only works if you have not unwittingly hit some of the waypoints already.`,
  links: [
    { title: 'River Rat Badge', href: 'https://homecoming.wiki/wiki/River Rat_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
}
