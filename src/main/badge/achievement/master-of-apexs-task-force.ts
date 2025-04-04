import { BadgeData } from 'coh-content-db'
import { DroneProtector } from './drone-protector'
import { BurdenBearer } from './burden-bearer'
import { AlreadyDead } from './already-dead'

export const MasterOfApexsTaskForce: BadgeData = {
  type: 'achievement',
  key: 'master-of-apexs-task-force',
  setTitleId: [1939],
  name: `Master of Apex's Task Force`,
  morality: 'all',
  badgeText: `You have gone through the Alpha and the Omega of Apex's Task Force.`,
  links: [
    { title: `Master of Apex's Task Force Badge`, href: 'https://homecoming.wiki/wiki/Master_of_Apex%27s_Task_Force_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-apexs-task-force.png',
  requirements: [
    { key: DroneProtector.key, type: 'badge', badgeKey: DroneProtector.key },
    { key: BurdenBearer.key, type: 'badge', badgeKey: BurdenBearer.key },
    { key: AlreadyDead.key, type: 'badge', badgeKey: AlreadyDead.key },
  ],
}
