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
  type: 'accolade',
  key: 'knows-novas-nooks',
  setTitleId: [1644],
  name: `Knows Nova's Nooks`,
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Nova Praetoria's Underground.`,
  links: [
    { title: `Knows Nova's Nooks Badge`, href: 'https://homecoming.wiki/wiki/Knows_Nova%27s_Nooks_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png',
  requirements: [
    { key: ClockworkMechanic.key, type: 'badge', badgeKey: ClockworkMechanic.key },
    { key: Disappeared.key, type: 'badge', badgeKey: Disappeared.key },
    { key: FerrymanOfTheDamned.key, type: 'badge', badgeKey: FerrymanOfTheDamned.key },
    { key: Morbid.key, type: 'badge', badgeKey: Morbid.key },
    { key: SecretPrisoner.key, type: 'badge', badgeKey: SecretPrisoner.key },
    { key: Trainspotter.key, type: 'badge', badgeKey: Trainspotter.key },
    { key: UrbanSpelunker.key, type: 'badge', badgeKey: UrbanSpelunker.key },
    { key: WarriorAtTheGate.key, type: 'badge', badgeKey: WarriorAtTheGate.key },
  ],
}
