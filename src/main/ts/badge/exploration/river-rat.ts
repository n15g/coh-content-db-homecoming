import { BadgeData, zoneLink } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'
import { NovaPraetoria } from '../../zone/nova-praetoria'
import { ImperialCity } from '../../zone/imperial-city'

export const RiverRat: BadgeData = {
  type: 'exploration',
  key: 'river-rat',
  setTitleId: [1405],
  name: 'River Rat',
  morality: 'all',
  badgeText: `An invigorating swim in the rich, clear waters of Praetoria always perks you up.`,
  notes: `
The River Rat Badge has 19 locations in Praetoria, most of which are located under the bridges scattered throughout the zone. In locations not covered by a bridge, look for the life buoys.
You will not receive the standard "Badge Earned" notification at each location. Instead, open your "Badges" window and select the category "Closest to Completion".
Every time that a waypoint is reached successfully, the badge status will move up the rung towards the top.

**It is necessary to visit all 19 locations to earn this badge.**

This badge can be frustrating to get. Where possible, go under bridges in the water; you cannot hit the target location when on the bridge.

The two easterly locations in ${zoneLink(Neutropolis)} have bridges that are flush to the water surface; the locations are just off to one side of the bridge.

It can also matter which zone you are in; the locations on the border between ${zoneLink(NovaPraetoria)} and ${zoneLink(ImperialCity)} can be approached in either zone.
Of these four, the northernmost should be approached while in ${zoneLink(NovaPraetoria)}; the others should be approached while in ${zoneLink(ImperialCity)}, as should those on the ${zoneLink(ImperialCity)} - ${zoneLink(Neutropolis)} border.

It is best to do this badge as soon as you arrive in Praetoria, even if you are very low level. There are no enemies in the water, and the method of watching "Closest to Completion" change only works if you have not unwittingly hit some of the waypoints already.`,
  links: [
    { title: 'River Rat Badge', href: 'https://homecoming.wiki/wiki/River_Rat_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: '1', type: 'location', notes: '1', location: { zoneKey: NovaPraetoria.key, coords: [-3178.5, -82, -2362] } },
    { key: '2', type: 'location', notes: '2', location: { zoneKey: NovaPraetoria.key, coords: [-5973, -82, -2816.5] } },
    { key: '3', type: 'location', notes: '3', location: { zoneKey: NovaPraetoria.key, coords: [-7030.5, -82, -778] } },
    { key: '4', type: 'location', notes: '4', location: { zoneKey: NovaPraetoria.key, coords: [-5973, -82, 2366] } },
    {
      key: '5', type: 'location', notes: '5', location: [
        { zoneKey: NovaPraetoria.key, coords: [-3236, -82, -2324] },
        { zoneKey: ImperialCity.key, coords: [-2860, -82, -512] },
      ],
    },
    {
      key: '6', type: 'location', notes: '6', location: [
        { zoneKey: NovaPraetoria.key, coords: [-2932.5, -82, 19] },
        { zoneKey: ImperialCity.key, coords: [-2860, -82, -5] },
      ],
    },
    {
      key: '7', type: 'location', notes: '7', location: [
        { zoneKey: NovaPraetoria.key, coords: [-3229.5, -82, 1322.5] },
        { zoneKey: ImperialCity.key, coords: [-3202.5, -82, 1360.5] },
      ],
    },
    {
      key: '8', type: 'location', notes: '8', location: [
        { zoneKey: NovaPraetoria.key, coords: [-4686.5, -82, 2821.5] },
        { zoneKey: ImperialCity.key, coords: [-2536, -82, 2371.5] },
      ],
    },
    { key: '9', type: 'location', notes: '9', location: { zoneKey: ImperialCity.key, coords: [1011, -82, -1163] } },
    { key: '10', type: 'location', notes: '10', location: { zoneKey: ImperialCity.key, coords: [-928, -82, 3091] } },
    { key: '11', type: 'location', notes: '11', location: { zoneKey: ImperialCity.key, coords: [-1036, -82, 1855] } },
    { key: '12', type: 'location', notes: '12', location: { zoneKey: ImperialCity.key, coords: [-1910.5, -82, 2126.5] } },
    {
      key: '13', type: 'location', notes: '13', location: [
        { zoneKey: ImperialCity.key, coords: [-630.5, -82, 3403.5] },
        { zoneKey: ImperialCity.key, coords: [418, -82, 4462] },
      ],
    },
    { key: '14', type: 'location', notes: '14', location: { zoneKey: ImperialCity.key, coords: [952, -82, 671] } },
    {
      key: '15', type: 'location', notes: '15', location: [
        { zoneKey: ImperialCity.key, coords: [-1277, -82, -2736] },
        { zoneKey: Neutropolis.key, coords: [1011, -82, 614.5] },
      ],
    },
    {
      key: '16', type: 'location', notes: '16', location: [
        { zoneKey: ImperialCity.key, coords: [939.5, -82, -1166] },
        { zoneKey: Neutropolis.key, coords: [3649.5, -82, -50.5] },
      ],
    },
    { key: '17', type: 'location', notes: '17', location: { zoneKey: Neutropolis.key, coords: [5755.5, -82, 1479] } },
    { key: '18', type: 'location', notes: '18', location: { zoneKey: Neutropolis.key, coords: [3656, -82, -1222.5] } },
    { key: '19', type: 'location', notes: '19', location: { zoneKey: Neutropolis.key, coords: [-2934.5, -82.5, -512] } },
  ],
}
