import { BadgeData } from 'coh-content-db'
import { TinMageMarkIITaskForce } from '../../mission/tin-mage-mark-ii-task-force'

export const AlphaStruck: BadgeData = {
  type: 'accomplishment',
  key: 'alpha-struck',
  setTitleId: [1938],
  name: 'Alpha Struck',
  morality: 'all',
  badgeText: 'You took the fight to the Praetorians and stopped their plans for a large-scale invasion into the heart of Atlas Park and Grandville!',
  links: [
    { title: 'Alpha Struck Badge', href: 'https://homecoming.wiki/wiki/Alpha_Struck_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/alpha-struck.png',
  requirements: [
    { key: TinMageMarkIITaskForce.key, type: 'mission', missionKey: TinMageMarkIITaskForce.key },
  ],
}
