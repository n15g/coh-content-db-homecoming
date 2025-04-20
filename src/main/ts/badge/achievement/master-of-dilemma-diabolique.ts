import { BadgeData } from 'coh-content-db'
import { Spinebreaker } from './spinebreaker'
import { SentinelSmasher } from './sentinel-smasher'
import { SacrificialLamb } from './sacrificial-lamb'
import { LifeAndDeath } from './life-and-death'

export const MasterOfDilemmaDiabolique: BadgeData = {
  type: 'achievement',
  key: 'master-of-dilemma-diabolique',
  setTitleId: [2168],
  name: 'Master of Dilemma Diabolique',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have mastered the Incarnate Trial: Dilemma Diabolique.',
  links: [
    { title: 'Master of Dilemma Diabolique Badge', href: 'https://homecoming.wiki/wiki/Master_of_Dilemma_Diabolique_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-dilemma-diabolique.png',
  requirements: [
    { key: Spinebreaker.key, type: 'badge', badgeKey: Spinebreaker.key },
    { key: SentinelSmasher.key, type: 'badge', badgeKey: SentinelSmasher.key },
    { key: SacrificialLamb.key, type: 'badge', badgeKey: SacrificialLamb.key },
    { key: LifeAndDeath.key, type: 'badge', badgeKey: LifeAndDeath.key },
  ],
}
