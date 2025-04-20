import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'

export const StuffOfLife: BadgeData = {
  type: 'exploration',
  key: 'stuff-of-life',
  setTitleId: [1729],
  name: 'Stuff of Life',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Praetor Berry's choice of decorations always hearken back to his reason d'etre - unlocking the secrets of the flesh held in sinew, cell, and DNA.`,
  notes: `Located next to the DNA sculpture in the Neuron's Reach neighborhood, 74 yards west of Battle Maiden.`,
  links: [
    { title: 'Stuff of Life Badge', href: 'https://homecoming.wiki/wiki/Stuff_of_Life_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Neutropolis.key, coords: [2228, -58, -649], icon: 'badge', iconText: '7' } },
  ],
}
