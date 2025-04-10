import { BadgeData } from 'coh-content-db'
import { StrigaIsle } from '../../zone/striga-isle'

export const WordsOfTheWarrior: BadgeData = {
  type: 'exploration',
  key: 'words-of-the-warrior',
  setTitleId: [1787],
  name: 'Words of the Warrior',
  morality: 'paragon-city-access',
  badgeText: `Two years ago when the Warriors came to Striga Isle they were eager to carve out a place for themselves; a staging area they could use to expand their holdings.
They've largely been beaten back by the Council and other groups, but have managed to keep this lone island, the location of a radio transmission station they have co-opted for their own use.
It broadcasts coded messages to the Warriors abroad as well as rousing chants and anthems meant to embolden them on the battlefield.
Members of the Council have tolerated its presence; for in addition to music (mostly composed of heavy metal bands and Wagner) the station's host keeps up a constant stream of expletive-laden rants against Paragon City's Hero population.`,
  notes: `Located 551 yards west of the Bonny Morass marker, at the base of the radio tower.`,
  links: [
    { title: 'Words of the Warrior Badge', href: 'https://homecoming.wiki/wiki/Words_of_the_Warrior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StrigaIsle.key, coords: [-524, 157, -2542], icon: 'badge', iconText: '5' } },
  ],
}
