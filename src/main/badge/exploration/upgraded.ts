import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const Upgraded: BadgeData = {
  type: 'EXPLORATION',
  key: 'upgraded',
  setTitle: { id: 97 },
  name: [{ value: 'Upgraded' }],
  alignment: ['H'],
  zoneKey: KingsRow.key,
  loc: [-496, 101, 768],
  badgeText: [{
    value: 'Kord Technologies makes its home in this building, and Tony Kord frequently uses his personal helicopter to commute to work.',
  }],
  notes: 'The Upgraded Badge is located in Kings Row in the middle of a helicopter landing pad on a rooftop just N of Freedom Plaza.'
    + '\n\nIt is located 67 Yards south of the pocket D entrance.',
  links: [
    { title: 'Upgraded Badge', href: 'https://homecoming.wiki/wiki/Upgraded_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
