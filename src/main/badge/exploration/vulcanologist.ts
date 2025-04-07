import { BadgeData, zoneLink } from 'coh-content-db'
import { StrigaIsle } from '../../zone/striga-isle'

export const Vulcanologist: BadgeData = {
  type: 'exploration',
  key: 'vulcanologist',
  setTitleId: [198],
  name: 'Vulcanologist',
  morality: 'heroic',
  zoneKey: StrigaIsle.key,
  loc: [-5346, 875, -796],
  badgeText: `The Council has hollowed out this dormant volcano to build a massive factory. The creations within are guarded with the utmost secrecy.`,
  notes: `
Located in ${zoneLink(StrigaIsle)} on the southwestern lip of the large volcano in the center of the Council Base neighborhood.

It is approximately 46 yards from the Council Base marker.`,
  links: [
    { title: 'Vulcanologist Badge', href: 'https://homecoming.wiki/wiki/Vulcanologist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '3',
}
