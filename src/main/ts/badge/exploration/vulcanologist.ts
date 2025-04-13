import { BadgeData } from 'coh-content-db'
import { StrigaIsle } from '../../zone/striga-isle'

export const Vulcanologist: BadgeData = {
  type: 'exploration',
  key: 'vulcanologist',
  setTitleId: [198],
  name: 'Vulcanologist',
  morality: 'paragon-city-access',
  badgeText: `The Council has hollowed out this dormant volcano to build a massive factory. The creations within are guarded with the utmost secrecy.`,
  notes: `Located approx. 46 yards from the Council Base marker on the southwestern lip of the large volcano.`,
  links: [
    { title: 'Vulcanologist Badge', href: 'https://homecoming.wiki/wiki/Vulcanologist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StrigaIsle.key, coords: [-5346, 875, -796], icon: 'badge', iconText: '3' } },
  ],
}
