import { BadgeData } from 'coh-content-db'
import { DroneProtector } from './drone-protector'
import { BurdenBearer } from './burden-bearer'
import { AlreadyDead } from './already-dead'

export const MasterOfApexsTaskForce: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-apexs-task-force',
  setTitle: { id: 1939 },
  name: [
    { value: 'Master of Apex\'s Task Force' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have gone through the Alpha and the Omega of Apex\'s Task Force.' },
  ],
  links: [
    { title: 'Master of Apex\'s Task Force Badge', href: 'https://homecoming.wiki/wiki/Master_of_Apex%27s_Task_Force_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-apexs-task-force.png' },
  ],
  requirements: [[
    { key: DroneProtector.key, type: 'BADGE', badgeKey: DroneProtector.key },
    { key: BurdenBearer.key, type: 'BADGE', badgeKey: BurdenBearer.key },
    { key: AlreadyDead.key, type: 'BADGE', badgeKey: AlreadyDead.key },
  ]],
}
