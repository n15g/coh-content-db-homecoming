import { BadgeData, mapLink } from 'coh-content-db'
import { PeregrineIsland } from '../../map/peregrine-island'

export const DarkOmen: BadgeData = {
  type: 'EXPLORATION',
  key: 'dark-omen',
  setTitle: { id: 1578 },
  name: [{ value: 'Dark Omen' }],
  alignment: ['H'],
  mapKey: PeregrineIsland.key,
  loc: [351, -18, -8978],
  badgeText: [{
    value: 'These battered bones are all that remains of a foolhardy adventurer who sought to explore this island full of monsters.'
      + ' No one has tried to identify them, as the people of Peregrine Island are too terrified of this island to even go near it.',
  }],
  notes: `Located in the Tempest Quay neighborhood of ${mapLink(PeregrineIsland)} on the southwest shore of the northern island.

          Be Careful: Approaching this badge will bring you into close proximity of Devouring Earth Monsters.`,
  links: [
    { title: 'Dark Omen Badge', href: 'https://homecoming.wiki/wiki/Dark_Omen_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '8',
}
