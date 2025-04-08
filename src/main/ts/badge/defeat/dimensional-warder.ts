import { BadgeData } from 'coh-content-db'

export const DimensionalWarder: BadgeData = {
  type: 'defeat',
  key: 'dimensional-warder',
  setTitleId: [57],
  name: 'Dimensional Warder',
  morality: 'heroic',
  badgeText: 'You have made yourself legend by defeating the Praetorians, an evil version of the Freedom Phalanx from an alternate dimension.',
  acquisition: 'Defeat all fifteen Praetorian Archvillains.',
  links: [
    { title: 'Dimensional Warder Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Warder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png',
  requirements: [
    { key: 'am', type: 'task', notes: 'Anti-Matter' },
    { key: 'bm', type: 'task', notes: 'Battle Maiden' },
    { key: 'bs', type: 'task', notes: 'Black Swan' },
    { key: 'bc', type: 'task', notes: 'Bobcat' },
    { key: 'ch', type: 'task', notes: 'Chimera' },
    { key: 'dd', type: 'task', notes: 'Diabolique' },
    { key: 'dx', type: 'task', notes: 'Dominatrix' },
    { key: 'in', type: 'task', notes: 'Infernal' },
    { key: 'ma', type: 'task', notes: 'Malaise' },
    { key: 'mr', type: 'task', notes: 'Marauder' },
    { key: 'mm', type: 'task', notes: 'Mother Mayhem' },
    { key: 'ne', type: 'task', notes: 'Neuron' },
    { key: 'ni', type: 'task', notes: 'Nightstar' },
    { key: 'si', type: 'task', notes: 'Siege' },
  ],
}
