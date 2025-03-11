import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../map/croatoa'

export const JacksWrath: BadgeData = {
  type: 'EXPLORATION',
  key: 'jacks-wrath',
  setTitle: { id: 1542 },
  name: [{ value: 'Jack\'s Wrath' }],
  alignment: ['H'],
  mapKey: Croatoa.key,
  loc: [778, 0, -1495],
  badgeText: [{
    value: 'This path of destruction was made by Jack in Irons, who stormed all the way here from his throne deep in the forests of Croatoa.'
      + ' The witches of the Cabal were barely able to push Jack back, but not before he destroyed much of their territory.',
  }],
  notes: 'Located in the Sunset Ridge neighborhood of [map:croatoa].\n'
    + '\n'
    + 'It is in the middle of a ruined building 214 yards NNE of the neighborhood marker.',
  links: [
    { title: 'Jack\'s Wrath Badge', href: 'https://homecoming.wiki/wiki/Jack%27s_Wrath_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '6',
}
