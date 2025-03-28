import { BadgeData } from 'coh-content-db'
import { Spinebreaker } from './spinebreaker'
import { SentinelSmasher } from './sentinel-smasher'
import { SacrificialLamb } from './sacrificial-lamb'
import { LifeAndDeath } from './life-and-death'

export const MasterOfDilemmaDiabolique: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-dilemma-diabolique',
  setTitle: { id: 2168 },
  name: [
    { value: 'Master of Dilemma Diabolique' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: Dilemma Diabolique.' },
  ],
  links: [
    { title: 'Master of Dilemma Diabolique Badge', href: 'https://homecoming.wiki/wiki/Master_of_Dilemma_Diabolique_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-dilemma-diabolique.png' },
  ],
  requirements: [[
    { key: Spinebreaker.key, type: 'BADGE', badgeKey: Spinebreaker.key },
    { key: SentinelSmasher.key, type: 'BADGE', badgeKey: SentinelSmasher.key },
    { key: SacrificialLamb.key, type: 'BADGE', badgeKey: SacrificialLamb.key },
    { key: LifeAndDeath.key, type: 'BADGE', badgeKey: LifeAndDeath.key },
  ]],
}
