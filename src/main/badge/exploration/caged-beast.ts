import { BadgeData, mapLink } from 'coh-content-db'
import { TheAbyss } from '../../map/the-abyss'

export const CagedBeast: BadgeData = {
  type: 'EXPLORATION',
  key: 'caged-beast',
  setTitle: { id: 1863 },
  name: [{ value: 'Caged Beast' }],
  alignment: ['H', 'V', 'P'],
  mapKey: TheAbyss.key,
  loc: [-43, -44, -135],
  badgeText: [{
    value: `The very air vibrates with the barely contained rage of the creatures that had once been penned here—relegated to servile status for the amusement of lesser beings.
You can relate, you've been subject to incarceration for violating ridiculous laws meant for equally lesser beings, and you threw off their shackles just as these monsters did.`,
  }],
  notes: `Located in ${mapLink(TheAbyss)}, 316 yards north of the Grandville transfer point, roughly in the center of the widest part of the fenced-in area closest to the submarine.`,
  links: [
    { title: 'Caged Beast Badge', href: 'https://homecoming.wiki/wiki/Caged_Beast_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
