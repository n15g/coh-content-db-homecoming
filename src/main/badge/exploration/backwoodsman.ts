import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const Backwoodsman: BadgeData = {
  type: 'EXPLORATION',
  key: 'backwoodsman',
  setTitle: { id: 195 },
  name: [{ value: 'Backwoodsman' }],
  alignment: ['H'],
  zoneKey: TheHollows.key,
  loc: [-2150, 42, 3332],
  badgeText: [{
    value: 'These woods have cropped up at an alarming rate since the Hollowing.'
      + ' Many believe the dramatic growth rate of the trees is due to the area being saturated with mystical residue from the Circle\'s spells.',
  }],
  notes: 'Roughly 697 yards S-SE from the Eastgate Heights\' marker.',
  links: [
    { title: 'Backwoodsman Badge', href: 'https://homecoming.wiki/wiki/Backwoodsman_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
