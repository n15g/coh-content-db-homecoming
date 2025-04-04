import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const Summoned: BadgeData = {
  type: 'exploration',
  key: 'summoned',
  setTitleId: [96],
  name: 'Summoned',
  morality: 'heroic',
  zoneKey: KingsRow.key,
  loc: [-940.5, -41.7, 2977.4],
  badgeText: `Statesman broke up a ritual by the Circle of Thorn members that would have bolstered their ranks exponentially.`,
  notes: 'The Summoned Badge is located near the southern border of Kings Row, southeastern to the hospital 343 yards.'
    + '\n\nIt is in the middle of the Industrial Avenue neighborhood, next to a broken pipe in the ground that leaks steam.'
    + ' It is approximately 182 yards east of the Industrial Avenue neighborhood marker.',
  links: [
    { title: 'Summoned Badge', href: 'https://homecoming.wiki/wiki/Summoned_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '1',
}
