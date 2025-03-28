import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const EyeOfTheGemini: BadgeData = {
  type: 'EXPLORATION',
  key: 'eye-of-the-gemini',
  setTitle: { id: 1523 },
  name: [{ value: 'Eye of the Gemini' }],
  alignment: ['H'],
  zoneKey: EchoGalaxyCity.key,
  loc: [-1376, 0, 347],
  badgeText: [{
    value: 'Gemini Park was once a popular gathering spot for people in the city, until the Hellions and Vahzilok took over.'
      + ' On some occasions many heroes could be seen relaxing in the area, daring the local gangs to try something.'
      + ' The people of Paragon would hold events on these days, happy to have their park wrested away from the hands of criminals.',
  }],
  notes: 'The Eye of the Gemini Badge is located in the Gemini Park neighborhood of Echo: Galaxy City. It is near a set of three picnic tables 67 yards west of the neighborhood marker.',
  links: [
    { title: 'Eye of the Gemini Badge', href: 'https://homecoming.wiki/wiki/Eye_of_the_Gemini_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
