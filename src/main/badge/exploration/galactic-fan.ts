import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const GalacticFan: BadgeData = {
  type: 'exploration',
  key: 'galactic-fan',
  setTitleId: [1522],
  name: 'Galactic Fan',
  morality: 'heroic',
  zoneKey: EchoGalaxyCity.key,
  loc: [920, 32, -832],
  badgeText: `Galaxy Girl's sacrifice to save the people of Paragon City has not gone unnoticed, prompting this tremendous statue to be built in honor of her.
Galaxy Girl's father visited the statue every day until he passed away at the age of 91.`,
  notes: 'Located in the Freedom Court neighborhood, at the base of the statue of Galaxy Girl directly behind Freedom Corps Headquarters.',
  links: [
    { title: 'Galactic Fan Badge', href: 'https://homecoming.wiki/wiki/Galactic_Fan_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '6',
}
