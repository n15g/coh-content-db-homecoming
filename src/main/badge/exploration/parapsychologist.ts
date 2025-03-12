import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../map/the-hollows'

export const Parapsychologist: BadgeData = {
  type: 'EXPLORATION',
  key: 'parapsychologist',
  setTitle: { id: 192 },
  name: [{ value: 'Parapsychologist' }],
  alignment: ['H'],
  mapKey: TheHollows.key,
  loc: [-704, 379, 885],
  badgeText: [{
    value: 'These hills are home to some of the Circle\'s most secret rites. Very few are allowed to leave after venturing here.',
  }],
  notes: 'Roughtly 293 yards NW of the Eastgate Heights\' marker.',
  links: [
    { title: 'Parapsychologist Badge', href: 'https://homecoming.wiki/wiki/Parapsychologist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
