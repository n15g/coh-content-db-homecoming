import { BadgeData } from 'coh-content-db'
import { MonsterIsland } from '../../zone/monster-island'

export const MonsterFactory: BadgeData = {
  type: 'exploration',
  key: 'monster-factory',
  setTitleId: [1875],
  name: 'Monster Factory',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `Mankind has a long history of creating monsters that escape their control and ultimately turn on them.
If there is an example of the opposite in effect, it is Hamidon and his Devouring Earth monstrosities.
Hamidon has shown how little the rest of humanity understands what it means to be a true creator species.
His creations are flawless and true to their creator.
They adore him and he them and they obey him without question.
Others have tried to replicate his success and failed to achieve a fraction of his ability.
This island is a living testimony to Hamidon's power to transcend human limitations: observe and learn.`,
  notes: `Located 239 yards northwest of the Cutlass Isles marker, roughly in the center of the rooftop of the southern elongated building.`,
  links: [
    { title: 'Monster Factory Badge', href: 'https://homecoming.wiki/wiki/Monster_Factory_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MonsterIsland.key, coords: [-1705, 47, -7378], icon: 'badge', iconText: '8' } },
  ],
}
