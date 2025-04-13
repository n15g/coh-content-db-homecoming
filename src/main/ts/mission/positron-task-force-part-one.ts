import { MissionData } from 'coh-content-db'
import { Positron } from '../contact/positron'

export const PositronTaskForcePartOne: MissionData = {
  key: 'positron-task-force-part-one',
  name: 'Positron Task Force Part One',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: Positron.key,
  levelRange: [8, 15],
  links: [
    { title: 'Positron Task Force Part One', href: 'https://homecoming.wiki/wiki/Positron_Task_Force_Part_One' },
  ],
}
