import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const CircleGazer: BadgeData = {
  type: 'exploration',
  key: 'circle-gazer',
  setTitleId: [1494],
  name: 'Circle Gazer',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `No one is quite sure about the purpose of these odd monuments.
Some say that Dr. Aeon sent a squad of Arachnos to decimate them long ago and though his minions managed to destroy one, spirits haunted Dr. Aeon for weeks.
The operation was inexplicably called off.`,
  notes: `The Circle Gazer Badge is located in the New Haven neighborhood, on top of the easternmost Circle of Thorns monument, 261 yards NNW of the neighborhood marker.`,
  links: [
    { title: 'Circle Gazer Badge', href: 'https://homecoming.wiki/wiki/Circle_Gazer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CapAuDiable.key, coords: [-130, 37, -2394], icon: 'badge', iconText: '8' } },
  ],
}
