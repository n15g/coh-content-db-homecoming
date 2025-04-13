import { MissionData } from 'coh-content-db'
import { Synapse } from '../contact/synapse'

export const SynapseTaskForce: MissionData = {
  key: 'synapse-task-force',
  name: 'Synapse Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: Synapse.key,
  levelRange: [15, 20],
  links: [
    { title: 'Synapse Task Force', href: 'https://homecoming.wiki/wiki/Synapse_Task_Force' },
  ],
}
