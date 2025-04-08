import { BadgeData, contactLink } from 'coh-content-db'
import { MercyIsland } from '../../zone/mercy-island'
import { Mongoose } from '../../contact/mongoose'

export const TheNextBigThing: BadgeData = {
  type: 'exploration',
  key: 'the-next-big-thing',
  setTitleId: [267],
  name: 'The Next Big Thing',
  morality: 'rogue-isles-access',
  badgeText: `This is the good life. The higher up you get, the bigger you are.`,
  notes: `Located just inside the Mercy neighborhood at the top of the high wall surrounding it.

If you take the elevator up from ${contactLink(Mongoose)}'s location and walk straight towards Arbiter Richard, the badge marker is about halfway to the Arbiter.`,
  links: [
    { title: 'The Next Big Thing Badge', href: 'https://homecoming.wiki/wiki/The_Next_Big_Thing_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MercyIsland.key, coords: [-1215, 239, -153] }, vidiotMapKey: '5' },
  ],
}
