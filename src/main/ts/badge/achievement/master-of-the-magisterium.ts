import { BadgeData } from 'coh-content-db'
import { TripleThreat } from './triple-threat'
import { ReadyToRumble } from './ready-to-rumble'
import { ShadowMaster } from './shadow-master'
import { TheHardWay } from './the-hard-way'

export const MasterOfTheMagisterium: BadgeData = {
  type: 'achievement',
  key: 'master-of-magisterium',
  setTitleId: [2225],
  name: 'Master of the Magisterium',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have mastered the Incarnate Trial: Magisterium.',
  links: [
    { title: 'Master of the Magisterium Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Magisterium_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-magisterium.png',
  requirements: [
    { key: TripleThreat.key, type: 'badge', badgeKey: TripleThreat.key },
    { key: ReadyToRumble.key, type: 'badge', badgeKey: ReadyToRumble.key },
    { key: ShadowMaster.key, type: 'badge', badgeKey: ShadowMaster.key },
    { key: TheHardWay.key, type: 'badge', badgeKey: TheHardWay.key },
  ],
}
