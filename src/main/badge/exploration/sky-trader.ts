import { BadgeData } from 'coh-content-db'
import { SharkheadIsle } from '../../map/sharkhead-isle'

export const SkyTrader: BadgeData = {
  type: 'EXPLORATION',
  key: 'sky-trader',
  setTitle: { id: 1498 },
  name: [{ value: 'Sky Trader' }],
  alignment: ['V'],
  mapKey: SharkheadIsle.key,
  loc: [-2077, 56, 512],
  badgeText: [{
    value: `The Family's mansion in Villa Requin has played host to many higher ranking officials within the Sky Raiders.
 There are rumors that the two groups plot a potential take over of Sharkhead Isle within this mansion.`,
  }],
  notes: `Located in [map:${SharkheadIsle.key}], in the Villa Requin neighborhood.

It is in front of the eastern mansion, 14 feet east of the neighborhood marker.`,
  links: [
    { title: 'Sky Trader Badge', href: 'https://homecoming.wiki/wiki/Sky_Trader_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '7',
}
