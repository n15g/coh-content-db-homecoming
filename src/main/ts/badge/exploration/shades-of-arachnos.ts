import { BadgeData } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'

export const ShadesOfArachnos: BadgeData = {
  type: 'exploration',
  key: 'shades-of-arachnos',
  setTitleId: [1576],
  name: 'Shades of Arachnos',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `You could swear that you just saw a submarine off the coast of this island...but it's gone now. It was probably just your imagination.`,
  notes: `Located in the Cutlass Isles neighborhood, on the northeast shore of the small northernmost island.`,
  links: [
    { title: 'Shades of Arachnos Badge', href: 'https://homecoming.wiki/wiki/Shades_of_Arachnos_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PeregrineIsland.key, coords: [-2535, -1, -8276], icon: 'badge', iconText: '6' } },
  ],
}
