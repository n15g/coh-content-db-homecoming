import { BadgeData } from 'coh-content-db'
import { Jailbreaker } from './jailbreaker'
import { KnockbackKing } from './knockback-king'
import { SnowWarning } from './snow-warning'
import { SubterraneanStriker } from './subterranean-striker'

export const MasterOfZoesTaskForce: BadgeData = {
  type: 'achievement',
  key: 'master-of-zoes-task-force',
  setTitleId: [2581],
  name: `Master of Zoe's Task Force`,
  releaseDate: '2025-11-30',
  morality: 'any',
  badgeText: `You have proven yourself Master of Marigold 'Zoe' Langston's Task Force.`,
  acquisition: `Achieve the following special achievements during Marigold 'Zoe' Langston's Task Force: Snow Warning, Jailbreaker, Subterranean Striker, and Knockback King/Queen.`,
  links: [
    { title: 'Master of Zoe's Task Force Badge', href: 'https://homecoming.wiki/wiki/Master_of_Zoe's_Task_Force_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-zoes-task-force.png',
  requirements: [
    { key: Jailbreaker.key, type: 'badge', badgeKey: Jailbreaker.key },
    { key: KnockbackKing.key, type: 'badge', badgeKey: KnockbackKing.key },
    { key: SnowWarning.key, type: 'badge', badgeKey: SnowWarning.key },
    { key: SubterraneanStriker.key, type: 'badge', badgeKey: SubterraneanStriker.key },
  ],
}
