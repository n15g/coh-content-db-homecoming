import { BadgeData, zoneLink } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'
import { PocketD } from '../../zone/pocket-d'

export const Upgraded: BadgeData = {
  type: 'exploration',
  key: 'upgraded',
  setTitleId: [97],
  name: 'Upgraded',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Kord Technologies makes its home in this building, and Tony Kord frequently uses his personal helicopter to commute to work.`,
  notes: `Located 67 Yards south of the ${zoneLink(PocketD)} entrance, in the middle of a helicopter landing pad on a rooftop just N of Freedom Plaza.`,
  links: [
    { title: 'Upgraded Badge', href: 'https://homecoming.wiki/wiki/Upgraded_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KingsRow.key, coords: [-496, 101, 768], icon: 'badge', iconText: '2' } },
  ],
}
