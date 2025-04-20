import { BadgeData } from 'coh-content-db'
import { MercyIsland } from '../../zone/mercy-island'

export const Widower: BadgeData = {
  type: 'exploration',
  key: 'widower',
  setTitleId: [268],
  name: [
    { sex: 'M', value: 'Widower' },
    { sex: 'F', value: 'Widow' },
  ],
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `They say that lonely tower is the home of Ghost Widow, Lord Recluse's phantom servant.`,
  notes: `Located outside the door of the very tall tower in the northeast corner of Fort Cerberus.`,
  links: [
    { title: 'Widower Badge', href: 'https://homecoming.wiki/wiki/Widower_Badge' },
    { title: 'Widow Badge', href: 'https://homecoming.wiki/wiki/Widow_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MercyIsland.key, coords: [-3890, 407, 354], icon: 'badge', iconText: '6' } },
  ],
}
