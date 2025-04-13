import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const Summoned: BadgeData = {
  type: 'exploration',
  key: 'summoned',
  setTitleId: [96],
  name: 'Summoned',
  morality: 'paragon-city-access',
  badgeText: `Statesman broke up a ritual by the Circle of Thorn members that would have bolstered their ranks exponentially.`,
  notes: `Located in the middle of the Industrial Avenue neighborhood, 343 yards southeast of the hospital, next to a broken pipe in the ground that leaks steam. It is approximately 182 yards east of the Industrial Avenue neighborhood marker.`,
  links: [
    { title: 'Summoned Badge', href: 'https://homecoming.wiki/wiki/Summoned_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KingsRow.key, coords: [-940.5, -41.7, 2977.4], icon: 'badge', iconText: '1' } },
  ],
}
