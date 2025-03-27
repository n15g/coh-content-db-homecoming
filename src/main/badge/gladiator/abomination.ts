import { BadgeData, badgeLink } from 'coh-content-db'
import { SynapsesCohort } from '../accomplishment/synapses-cohort'

export const Abomination: BadgeData = {
  type: 'GLADIATOR',
  key: 'abomination',
  setTitle: { id: 479 },
  name: [
    { value: 'Abomination' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'The Vahzilok fear you.' },
  ],
  acquisition: `Earn the ${badgeLink(SynapsesCohort)} Badge (Vahzilok)`,
  links: [
    { title: 'Abomination Badge', href: 'https://homecoming.wiki/wiki/Abomination_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
