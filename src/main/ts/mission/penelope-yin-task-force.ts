import { MissionData } from 'coh-content-db'
import { PenelopeYinFreedomPhalanx } from '../contact/penelope-yin-freedom-phalanx'

export const PenelopeYinTaskForce: MissionData = {
  key: 'penelope-yin-task-force',
  name: 'Penelope Yin Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: PenelopeYinFreedomPhalanx.key,
  levelRange: [20, 25],
  links: [
    { title: 'Penelope Yin Task Force', href: 'https://homecoming.wiki/wiki/Penelope_Yin_Task_Force' },
  ],
}
