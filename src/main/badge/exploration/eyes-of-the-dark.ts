import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const EyesOfTheDark: BadgeData = {
  type: 'EXPLORATION',
  key: 'eyes-of-the-dark',
  setTitle: { id: 1648 },
  name: [{ value: 'Eyes of the Dark' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: UndergroundImperial.key,
  loc: [-1246, 335, -2429],
  badgeText: [{
    value: 'From this vantage point you can watch the Resistance come and go from their subterranean redoubt.'
      + ' You are the eyes in the dark, observing their movements.'
      + ' Are you their guardian, watching over them, or are you the predator, looking for the optimal time to strike?',
  }],
  notes: `Located in ${zoneLink(UndergroundImperial)} 95 feet from the door to the Resistance Hub.`,
  links: [
    { title: 'Eyes of the Dark Badge', href: 'https://homecoming.wiki/wiki/Eyes_of_the_Dark_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '4',
}
