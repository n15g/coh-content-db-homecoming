import { MissionData } from 'coh-content-db'
import { ErnestoHess } from '../contact/ernesto-hess'

export const ErnestoHessTaskForce: MissionData = {
  key: 'ernesto-hess-task-force',
  name: 'Ernesto Hess Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: ErnestoHess.key,
  levelRange: [25, 30],
  links: [
    { title: 'Ernesto Hess Task Force', href: 'https://homecoming.wiki/wiki/Ernesto_Hess_Task_Force' },
  ],
}
