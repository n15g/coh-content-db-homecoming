import { BadgeData, mapLink } from 'coh-content-db'
import { PeregrineIsland } from '../../map/peregrine-island'

export const ShadesOfArachnos: BadgeData = {
  type: 'EXPLORATION',
  key: 'shades-of-arachnos',
  setTitle: { id: 1576 },
  name: [{ value: 'Shades of Arachnos' }],
  alignment: ['H'],
  mapKey: PeregrineIsland.key,
  loc: [-2535, -1, -8276],
  badgeText: [{
    value: 'You could swear that you just saw a submarine off the coast of this island...but it\'s gone now. It was probably just your imagination.',
  }],
  notes: `Located in the Cutlass Isles neighborhood of ${mapLink(PeregrineIsland)} on the northeast shore of the small northernmost island.
`
    + '\n'
    + 'Be Careful: Approaching this badge will bring you into close proximity of Devouring Earth Monsters.',
  links: [
    { title: 'Shades of Arachnos Badge', href: 'https://homecoming.wiki/wiki/Shades_of_Arachnos_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '6',
}
