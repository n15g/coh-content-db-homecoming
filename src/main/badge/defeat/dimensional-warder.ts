import { BadgeData } from 'coh-content-db'

export const DimensionalWarder: BadgeData = {
  type: 'DEFEAT',
  key: 'dimensional-warder',
  setTitle: { id: 57 },
  name: [
    { value: 'Dimensional Warder' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You have made yourself legend by defeating the Praetorians, an evil version of the Freedom '
        + 'Phalanx from an alternate dimension.',
    },
  ],
  acquisition: 'Defeat all fifteen Praetorian Archvillains',
  links: [
    { title: 'Dimensional Warder Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Warder_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png' },
  ],
}
