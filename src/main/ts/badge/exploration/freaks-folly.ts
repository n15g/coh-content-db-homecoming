import { BadgeData } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'

export const FreaksFolly: BadgeData = {
  type: 'exploration',
  key: 'freaks-folly',
  setTitleId: [1795],
  name: `Freak's Folly`,
  morality: 'paragon-city-access',
  badgeText: `Crey's Folly is a toxic cesspool, and only a group as demented as the Freakshow could ever consider such a place home.
They attribute their hearty constitutions and Crey's super-booster drugs as the means by which they are able to tolerate the noxious environment.
In truth, however, the poisons that suffuse the ground, water, and air of Crey's Folly are slowly taking their toll and were it not for the general lethality of the Freakshow's lifestyle,
the numbers lost to the environmental toxins would be more apparent.`,
  notes: `Located 254 yards NW of the Carnival Town marker, inside the Freakshow fortress.`,
  links: [
    { title: `Freak's Folly Badge`, href: 'https://homecoming.wiki/wiki/Freak%27s_Folly_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CreysFolly.key, coords: [7926, 32, -638] }, vidiotMapKey: '7' },
  ],
}
