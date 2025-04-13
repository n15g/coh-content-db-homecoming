import { MissionData } from 'coh-content-db'
import { TheLadyGrey } from '../contact/the-lady-grey'

export const TheLadyGreyTaskForce: MissionData = {
  key: 'the-lady-grey-task-force',
  name: 'The Lady Grey Task Force',
  type: 'task-force',
  morality: 'primal',
  contactKeys: TheLadyGrey.key,
  levelRange: [45],
  links: [
    { title: 'The Lady Grey Task Force', href: 'https://homecoming.wiki/wiki/The_Lady_Grey_Task_Force' },
  ],
}
