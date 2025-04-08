import { BadgeData } from 'coh-content-db'
import { SynapsesCohort } from '../accomplishment/synapses-cohort'
import { BinderOfBeasts } from '../accomplishment/binder-of-beasts'

export const Abomination: BadgeData = {
  type: 'gladiator',
  key: 'abomination',
  setTitleId: [479],
  name: 'Abomination',
  morality: 'heroic',
  badgeText: 'The Vahzilok fear you.',
  links: [
    { title: 'Abomination Badge', href: 'https://homecoming.wiki/wiki/Abomination_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: SynapsesCohort.key, type: 'badge', badgeKey: BinderOfBeasts.key },
  ],
}
