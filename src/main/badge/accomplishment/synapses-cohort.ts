import { BadgeData } from 'coh-content-db'
import { Synapse } from '../../contact/synapse'

export const SynapsesCohort: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'synapses-cohort',
  setTitle: { id: 62 },
  name: [
    { alignment: 'H', value: `Synapse's Cohort` },
    { alignment: 'V', value: `Synapse's Betrayer` },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'Synapse has awarded you this medal in recognition of your defeat of the Clockwork King.' },
    { alignment: 'V', value: 'After you defeated the Clockwork King, Synapse honored you with this medal. What would he think now?' },
  ],
  acquisition: 'Complete the Synapse Task Force: The Fall of the Clockwork King',
  links: [
    { title: `Synapse's Cohort Badge`, href: 'https://homecoming.wiki/wiki/Synapse%27s_Cohort_Badge' },
    { title: `Synapse's Betrayer Badge`, href: 'https://homecoming.wiki/wiki/Synapse%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/synapses-cohort.png',
  requirements: [
    { key: 'stf', type: 'TASK_FORCE', missionName: 'Synapse Task Force', contactKey: Synapse.key },
  ],
}
