import { BadgeData } from 'coh-content-db'
import { SynapseTaskForce } from '../../mission/synapse-task-force'

export const SynapsesCohort: BadgeData = {
  type: 'accomplishment',
  key: 'synapses-cohort',
  setTitleId: [62],
  name: [
    { alignment: 'hero', value: `Synapse's Cohort` },
    { alignment: 'villain', value: `Synapse's Betrayer` },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Synapse has awarded you this medal in recognition of your defeat of the Clockwork King.' },
    { alignment: 'villain', value: 'After you defeated the Clockwork King, Synapse honored you with this medal. What would he think now?' },
  ],
  links: [
    { title: `Synapse's Cohort Badge`, href: 'https://homecoming.wiki/wiki/Synapse%27s_Cohort_Badge' },
    { title: `Synapse's Betrayer Badge`, href: 'https://homecoming.wiki/wiki/Synapse%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/synapses-cohort.png',
  requirements: [
    { key: SynapseTaskForce.key, type: 'mission', missionKey: SynapseTaskForce.key },
  ],
}
