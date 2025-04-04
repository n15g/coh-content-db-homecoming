import { BadgeData, zoneLink } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const ShadesOfArachnos: BadgeData = {
  type: 'exploration',
  key: 'shades-of-arachnos',
  setTitleId: [1576],
  name: 'Shades of Arachnos',
  morality: 'heroic',
  zoneKey: PeregrineIsland.key,
  loc: [-2535, -1, -8276],
  badgeText: [{
    value: 'You could swear that you just saw a submarine off the coast of this island...but it\'s gone now. It was probably just your imagination.',
  }],
  notes: `Located in the Cutlass Isles neighborhood of ${zoneLink(PeregrineIsland)} on the northeast shore of the small northernmost island.
`
    + '\n'
    + 'Be Careful: Approaching this badge will bring you into close proximity of Devouring Earth Monsters.',
  links: [
    { title: 'Shades of Arachnos Badge', href: 'https://homecoming.wiki/wiki/Shades_of_Arachnos_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '6',
}
