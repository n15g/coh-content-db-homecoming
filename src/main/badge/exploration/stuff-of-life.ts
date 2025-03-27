import { BadgeData, mapLink } from 'coh-content-db'
import { Neutropolis } from '../../map/neutropolis'

export const StuffOfLife: BadgeData = {
  type: 'EXPLORATION',
  key: 'stuff-of-life',
  setTitle: { id: 1729 },
  name: [{ value: 'Stuff of Life' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Neutropolis.key,
  loc: [2228, -58, -649],
  badgeText: [{
    value: 'Praetor Berry\'s choice of decorations always hearken back to his reason d\'etre - unlocking the secrets of the flesh held in sinew, cell, and DNA.',
  }],
  notes: `Located in ${mapLink(Neutropolis)} next to the DNA sculpture in the Neuron's Reach neighborhood, 74 yards west of Battle Maiden.`,
  links: [
    { title: 'Stuff of Life Badge', href: 'https://homecoming.wiki/wiki/Stuff_of_Life_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '7',
}
