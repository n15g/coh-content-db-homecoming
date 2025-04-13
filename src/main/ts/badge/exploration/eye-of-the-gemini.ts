import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const EyeOfTheGemini: BadgeData = {
  type: 'exploration',
  key: 'eye-of-the-gemini',
  setTitleId: [1523],
  name: 'Eye of the Gemini',
  morality: 'paragon-city-access',
  badgeText: `Gemini Park was once a popular gathering spot for people in the city, until the Hellions and Vahzilok took over.
On some occasions many heroes could be seen relaxing in the area, daring the local gangs to try something.
The people of Paragon would hold events on these days, happy to have their park wrested away from the hands of criminals.`,
  notes: 'Located in the Gemini Park neighborhood, near a set of three picnic tables 67 yards west of the neighborhood marker.',
  links: [
    { title: 'Eye of the Gemini Badge', href: 'https://homecoming.wiki/wiki/Eye_of_the_Gemini_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoGalaxyCity.key, coords: [-1376, 0, 347], icon: 'badge', iconText: '7' } },
  ],
}
