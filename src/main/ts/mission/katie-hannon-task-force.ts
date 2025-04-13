import { MissionData } from 'coh-content-db'
import { KatieHannon } from '../contact/katie-hannon'

export const KatieHannonTaskForce: MissionData = {
  key: 'katie-hannon-task-force',
  name: 'Katie Hannon Task Force',
  type: 'personal-story',
  morality: 'heroic',
  contactKeys: KatieHannon.key,
  levelRange: [30, 34],
  links: [
    { title: 'Katie Hannon Task Force', href: 'https://homecoming.wiki/wiki/Katie_Hannon_Task_Force' },
  ],
}
