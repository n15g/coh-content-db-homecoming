import { MissionData } from 'coh-content-db'
import { TinMageMarkII } from '../contact/tin-mage-mark-ii'

export const TinMageMarkIITaskForce: MissionData = {
  key: 'tin-mage-mark-ii-task-force',
  name: 'Tin Mage Mark II Task Force',
  type: 'task-force',
  morality: 'primal',
  contactKeys: TinMageMarkII.key,
  levelRange: [50],
  links: [
    { title: 'Tin Mage Mark II Task Force', href: 'https://homecoming.wiki/wiki/Tin_Mage_Mark_II_Task_Force' },
  ],
}
