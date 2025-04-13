import { MissionData } from 'coh-content-db'
import { Positron } from '../contact/positron'

export const PositronTaskForcePartTwo: MissionData = {
  key: 'positron-task-force-part-two',
  name: 'Positron Task Force Part Two',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: Positron.key,
  levelRange: [11, 16],
  links: [
    { title: 'Positron Task Force Part Two', href: 'https://homecoming.wiki/wiki/Positron_Task_Force_Part_Two' },
  ],
}
