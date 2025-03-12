import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../map/echo-galaxy-city'

export const GalacticFan: BadgeData = {
  type: 'EXPLORATION',
  key: 'galactic-fan',
  setTitle: { id: 1522 },
  name: [{ value: 'Galactic Fan' }],
  alignment: ['H'],
  mapKey: EchoGalaxyCity.key,
  loc: [920, 32, -832],
  badgeText: [{
    value: 'Galaxy Girl\'s sacrifice to save the people of Paragon City has not gone unnoticed, prompting this tremendous statue to be built in honor of her.'
      + ' Galaxy Girl\'s father visited the statue every day until he passed away at the age of 91.',
  }],
  notes: 'The Galactic Fan Badge is located in the Freedom Court neighborhood of Echo: Galaxy City. It is at the base of the statue of Galaxy Girl directly behind Freedom Corps Headquarters.',
  links: [
    { title: 'Galactic Fan Badge', href: 'https://homecoming.wiki/wiki/Galactic_Fan_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '6',
}
