import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const BoomtownTroglodyte: BadgeData = {
  type: 'exploration',
  key: 'boomtown-troglodyte',
  setTitleId: [1778],
  name: 'Boomtown Troglodyte',
  morality: 'paragon-city-access',
  badgeText: `The Lost, despised and reviled by every other criminal organization and gang, have become adept at finding secure hiding places where they can plot their revenge.
Boomtown has several subterranean transit tunnels that escaped the devastation during the Rikti attack, and in fact provided shelter to Baumton's terrified residents.
Now the Lost call these tunnels home and they will defend them to the death.`,
  notes: `Located in a tunnel 448 yards east of the Grenadier Village marker.

From the Grenadier Village marker, face east and slightly north and you will see the entrance to the tunnel.`,
  links: [
    { title: 'Boomtown Troglodyte Badge', href: 'https://homecoming.wiki/wiki/Boomtown_Troglodyte_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Boomtown.key, coords: [-712, 0, -448] }, vidiotMapKey: '6' },
  ],
}
