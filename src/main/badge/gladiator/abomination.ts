import { BadgeData } from 'coh-content-db'
import { SynapsesCohort } from '../accomplishment/synapses-cohort'
import { BinderOfBeasts } from '../accomplishment/binder-of-beasts'

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
  links: [
    { title: 'Abomination Badge', href: 'https://homecoming.wiki/wiki/Abomination_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: SynapsesCohort.key, type: 'BADGE', badgeKey: BinderOfBeasts.key },
  ]],
}
