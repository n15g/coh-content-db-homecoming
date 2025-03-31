import { BadgeData } from 'coh-content-db'
import { ClockworkMechanic } from '../exploration/clockwork-mechanic'
import { Disappeared } from '../exploration/disappeared'
import { FerrymanOfTheDamned } from '../exploration/ferryman-of-the-damned'
import { Morbid } from '../exploration/morbid'
import { SecretPrisoner } from '../exploration/secret-prisoner'
import { Trainspotter } from '../exploration/trainspotter'
import { UrbanSpelunker } from '../exploration/urban-spelunker'
import { WarriorAtTheGate } from '../exploration/warrior-at-the-gate'

export const KnowsNovasNooks: BadgeData = {
  type: 'ACCOLADE',
  key: 'knows-novas-nooks',
  setTitle: { id: 1644 },
  name: [
    { value: `Knows Nova's Nooks` },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Nova Praetoria's Underground.` },
  ],
  links: [
    { title: `Knows Nova's Nooks Badge`, href: 'https://homecoming.wiki/wiki/Knows_Nova%27s_Nooks_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png' },
  ],
  requirements: [[
    { key: ClockworkMechanic.key, type: 'BADGE', badgeKey: ClockworkMechanic.key },
    { key: Disappeared.key, type: 'BADGE', badgeKey: Disappeared.key },
    { key: FerrymanOfTheDamned.key, type: 'BADGE', badgeKey: FerrymanOfTheDamned.key },
    { key: Morbid.key, type: 'BADGE', badgeKey: Morbid.key },
    { key: SecretPrisoner.key, type: 'BADGE', badgeKey: SecretPrisoner.key },
    { key: Trainspotter.key, type: 'BADGE', badgeKey: Trainspotter.key },
    { key: UrbanSpelunker.key, type: 'BADGE', badgeKey: UrbanSpelunker.key },
    { key: WarriorAtTheGate.key, type: 'BADGE', badgeKey: WarriorAtTheGate.key },
  ]],
}
