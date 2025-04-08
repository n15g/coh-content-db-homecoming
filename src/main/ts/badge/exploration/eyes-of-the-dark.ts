import { BadgeData } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const EyesOfTheDark: BadgeData = {
  type: 'exploration',
  key: 'eyes-of-the-dark',
  setTitleId: [1648],
  name: 'Eyes of the Dark',
  morality: 'all',
  badgeText: `From this vantage point you can watch the Resistance come and go from their subterranean redoubt.
 You are the eyes in the dark, observing their movements. Are you their guardian, watching over them, or are you the predator, looking for the optimal time to strike?`,
  notes: `Located 95 feet from the door to the Resistance Hub.`,
  links: [
    { title: 'Eyes of the Dark Badge', href: 'https://homecoming.wiki/wiki/Eyes_of_the_Dark_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundImperial.key, coords: [-1246, 335, -2429] }, vidiotMapKey: '4' },
  ],
}
