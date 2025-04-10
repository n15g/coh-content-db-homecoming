import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const BridgeHolder: BadgeData = {
  type: 'exploration',
  key: 'bridge-holder',
  setTitleId: [1548],
  name: 'Bridge Holder',
  morality: 'paragon-city-access',
  badgeText: `The hero known as 'The Commuter' recently thwarted an attempt by the 5th Column to blow up this bridge.
Some people in Paragon think the plot to destroy the bridge was ridiculous, but The Commuter insists that, 'this bridge means the world to all those who drive in and out of Talos everyday.'`,
  notes: `Located on the main bridge leading into the New Thebes neighborhood, 187 yards NNW of the Hero Corps Field Analyst.`,
  links: [
    { title: 'Bridge Holder Badge', href: 'https://homecoming.wiki/wiki/Bridge_Holder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TalosIsland.key, coords: [1917, 96, 7231], icon: 'badge', iconText: '6' } },
  ],
}
