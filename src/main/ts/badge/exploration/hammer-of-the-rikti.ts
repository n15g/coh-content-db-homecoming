import { BadgeData } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'

export const HammerOfTheRikti: BadgeData = {
  type: 'exploration',
  key: 'hammer-of-the-rikti',
  setTitleId: [1792],
  name: 'Hammer of the Rikti',
  morality: 'paragon-city-access',
  badgeText: `When Venice was targeted by the Rikti in their initial strike, this is where their first attack was centered.
The area was flattened and Rikti forces streamed into the area, slaying all they encountered.
As this location was the site of the main Crey administration facility, various groups are eager to plumb the ruins in search of lost tech, but the Rikti are thick in this area and have managed to repel any attempts to survey the damage.`,
  notes: `Located 140 yards SSE of The Blight marker, on top of the destroyed building.`,
  links: [
    { title: 'Hammer of the Rikti Badge', href: 'https://homecoming.wiki/wiki/Hammer_of_the_Rikti_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CreysFolly.key, coords: [2571, 22, 3691] }, vidiotMapKey: '4' },
  ],
}
