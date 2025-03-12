import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../map/independence-port'

export const DeadEnd: BadgeData = {
  type: 'EXPLORATION',
  key: 'dead-end',
  setTitle: { id: 1553 },
  name: [{ value: 'Dead End' }],
  alignment: ['H'],
  mapKey: IndependencePort.key,
  loc: [2213, 0, 4736],
  badgeText: [{
    value: 'More than one unlucky individual has met his end in this area of the \'Cargo Maze.\''
      + ' The Family is known for luring their victims into this area before \'icing\' them.'
      + ' It\'s easy enough for them to get away with it, as not many heroes wander around this area.',
  }],
  notes: 'The Dead End Badge is in the Liberty Quay neighborhood of Independence Port, 458 yards SSW of the neighborhood marker.'
    + '\n\nThe easiest way to find it is to go to the south end of the zone and head due north from the western tree along the security fence of the storage yard.',
  links: [
    { title: 'Dead End Badge', href: 'https://homecoming.wiki/wiki/Dead_End_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
