import { BadgeData } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const AuspiceAvernus: BadgeData = {
  type: 'exploration',
  key: 'auspice-avernus',
  setTitleId: [2181],
  name: 'Auspice Avernus',
  morality: 'all',
  badgeText: `As Mot rose again into the world of the living, the very earth was sundered in the passing.
The offal of its millennial imprisonment rose with it, a mephitic concoction of the most vile nature.
From weeping sores and gaping maws flows a fluid of reconstitution, flushing down its titanic mass and forming pools amongst the pockets of flesh and shattered earth.
Here, Mot's followers flock, intoxicating themselves on the potent fumes and ecstatically receiving visions of Mot's glory.`,
  notes: `Located in the Moth Cemetery neighborhood. Found at 379 yards south (and slightly east) of the Moth marker (or about 389 yards east and slightly north of the Illuminous marker) in a lake of water.
In the lower-right-hand corner of the red area of the Moth Cemetery boundaries right up next to the wall.`,
  links: [
    { title: 'Auspice Avernus Badge', href: 'https://homecoming.wiki/wiki/Auspice_Avernus_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: DarkAstoria.key, coords: [1015, 115, 2371] }, vidiotMapKey: '3' },
  ],
}
