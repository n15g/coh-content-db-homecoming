import { BadgeData, zoneLink } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const BridgeHolder: BadgeData = {
  type: 'EXPLORATION',
  key: 'bridge-holder',
  setTitle: { id: 1548 },
  name: [{ value: 'Bridge Holder' }],
  alignment: ['H'],
  zoneKey: TalosIsland.key,
  loc: [1917, 96, 7231],
  badgeText: [{
    value: 'The hero known as \'The Commuter\' recently thwarted an attempt by the 5th Column to blow up this bridge.'
      + ' Some people in Paragon think the plot to destroy the bridge was ridiculous, but The Commuter insists that, \'this bridge means the world to all'
      + ' those who drive in and out of Talos everyday.\'',
  }],
  notes: `Located on the main bridge leading into the New Thebes neighborhood of ${zoneLink(TalosIsland)}, 187 yards NNW of the Hero Corps Field Analyst.`,
  links: [
    { title: 'Bridge Holder Badge', href: 'https://homecoming.wiki/wiki/Bridge_Holder_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '6',
}
