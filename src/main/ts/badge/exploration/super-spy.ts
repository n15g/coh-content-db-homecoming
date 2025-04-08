import { BadgeData } from 'coh-content-db'
import { StrigaIsle } from '../../zone/striga-isle'

export const SuperSpy: BadgeData = {
  type: 'exploration',
  key: 'super-spy',
  setTitleId: [196],
  name: 'Super Spy',
  morality: 'paragon-city-access',
  badgeText: `The Council's expert security forces keep most heroes from venturing this far into their base.`,
  notes: `Located on the hinge of a large set of steel doors along the NW shore of the island.`,
  links: [
    { title: 'Super Spy Badge', href: 'https://homecoming.wiki/wiki/Super_Spy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StrigaIsle.key, coords: [-6655, -15, -2460] }, vidiotMapKey: '1' },
  ],
}
