import { BadgeData } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const SkyTrader: BadgeData = {
  type: 'exploration',
  key: 'sky-trader',
  setTitleId: [1498],
  name: 'Sky Trader',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `The Family's mansion in Villa Requin has played host to many higher ranking officials within the Sky Raiders.
There are rumors that the two groups plot a potential take over of Sharkhead Isle within this mansion.`,
  notes: `Located in the Villa Requin neighborhood,14 feet east of the neighborhood marker, in front of the eastern mansion.`,
  links: [
    { title: 'Sky Trader Badge', href: 'https://homecoming.wiki/wiki/Sky_Trader_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SharkheadIsle.key, coords: [-2077, 56, 512], icon: 'badge', iconText: '7' } },
  ],
}
