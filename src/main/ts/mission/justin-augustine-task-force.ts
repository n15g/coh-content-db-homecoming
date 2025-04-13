import { MissionData } from 'coh-content-db'
import { JustinAugustine } from '../contact/justin-augustine'

export const JustinAugustineTaskForce: MissionData = {
  key: 'justin-augustine-task-force',
  name: 'Justin Augustine Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: JustinAugustine.key,
  levelRange: [44],
  links: [
    { title: 'Justin Augustine Task Force', href: 'https://homecoming.wiki/wiki/Justin_Augustine_Task_Force' },
  ],
}
