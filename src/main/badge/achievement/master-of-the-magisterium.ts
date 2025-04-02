import { BadgeData } from 'coh-content-db'
import { TripleThreat } from './triple-threat'
import { ReadyToRumble } from './ready-to-rumble'
import { ShadowMaster } from './shadow-master'
import { TheHardWay } from './the-hard-way'

export const MasterOfTheMagisterium: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-magisterium',
  setTitle: { id: 2225 },
  name: [
    { value: 'Master of the Magisterium' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: Magisterium.' },
  ],
  links: [
    { title: 'Master of the Magisterium Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Magisterium_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-magisterium.png' },
  ],
  requirements: [
    { key: TripleThreat.key, type: 'BADGE', badgeKey: TripleThreat.key },
    { key: ReadyToRumble.key, type: 'BADGE', badgeKey: ReadyToRumble.key },
    { key: ShadowMaster.key, type: 'BADGE', badgeKey: ShadowMaster.key },
    { key: TheHardWay.key, type: 'BADGE', badgeKey: TheHardWay.key },
  ],
}
