import { BadgeData, mapLink } from 'coh-content-db'
import { MercyIsland } from '../../map/mercy-island'

export const TheNextBigThing: BadgeData = {
  type: 'EXPLORATION',
  key: 'the-next-big-thing',
  setTitle: { id: 267 },
  name: [{ value: 'The Next Big Thing' }],
  alignment: ['V'],
  mapKey: MercyIsland.key,
  loc: [-1215, 239, -153],
  badgeText: [{
    value: `This is the good life. The higher up you get, the bigger you are.`,
  }],
  notes: `Located on ${mapLink(MercyIsland)}, just inside the Mercy neighborhood at the top of the high wall surrounding it.

          If you take the elevator up from Mongoose's location and walk straight towards Arbiter Richard, the badge marker is about halfway to the Arbiter.`,
  links: [
    { title: 'The Next Big Thing Badge', href: 'https://homecoming.wiki/wiki/The_Next_Big_Thing_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '5',
}
