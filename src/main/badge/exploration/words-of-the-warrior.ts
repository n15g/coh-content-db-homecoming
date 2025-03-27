import { BadgeData, mapLink } from 'coh-content-db'
import { StrigaIsle } from '../../map/striga-isle'

export const WordsOfTheWarrior: BadgeData = {
  type: 'EXPLORATION',
  key: 'words-of-the-warrior',
  setTitle: { id: 1787 },
  name: [{ value: 'Words of the Warrior' }],
  alignment: ['H'],
  mapKey: StrigaIsle.key,
  loc: [-524, 157, -2542],
  badgeText: [{
    value: 'Two years ago when the Warriors came to Striga Isle they were eager to carve out a place for themselves; a staging area they could use to expand their holdings.'
      + ' They\'ve largely been beaten back by the Council and other groups, but have managed to keep this lone island, the location of a radio transmission station they have co-opted'
      + ' for their own use. It broadcasts coded messages to the Warriors abroad as well as rousing chants and anthems meant to embolden them on the battlefield.'
      + ' Members of the Council have tolerated its presence; for in addition to music (mostly composed of heavy metal bands and Wagner) the station\'s host keeps up a constant stream of'
      + ' expletive-laden rants against Paragon City\'s Hero population.',
  }],
  notes: `Located in ${mapLink(StrigaIsle)} 551 yards west of the Bonny Morass marker, at the base of the radio tower.`,
  links: [
    { title: 'Words of the Warrior Badge', href: 'https://homecoming.wiki/wiki/Words_of_the_Warrior_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
