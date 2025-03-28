import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'
import { BrokenMind } from '../exploration/broken-mind'
import { Condemning } from '../exploration/condemning'
import { Engineer } from '../exploration/engineer'
import { EyesOfTheDark } from '../exploration/eyes-of-the-dark'
import { Hoarder } from '../exploration/hoarder'
import { Lowlife } from '../exploration/lowlife'
import { SilentWitness } from '../exploration/silent-witness'
import { UndergroundExplorer } from '../exploration/underground-explorer'

export const BeneathTheEmpire: BadgeData = {
  type: 'ACCOLADE',
  key: 'beneath-the-empire',
  setTitle: { id: 1653 },
  name: [
    { value: 'Beneath the Empire' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Imperial City's Underground.` },
  ],
  notes: `Visit all exploration badges in ${zoneLink(UndergroundImperial)}`,
  links: [
    { title: 'Beneath the Empire Badge', href: 'https://homecoming.wiki/wiki/Beneath_the_Empire_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png' },
  ],
  requirements: [[
    { key: BrokenMind.key, type: 'BADGE', badgeKey: BrokenMind.key },
    { key: Condemning.key, type: 'BADGE', badgeKey: Condemning.key },
    { key: Engineer.key, type: 'BADGE', badgeKey: Engineer.key },
    { key: EyesOfTheDark.key, type: 'BADGE', badgeKey: EyesOfTheDark.key },
    { key: Hoarder.key, type: 'BADGE', badgeKey: Hoarder.key },
    { key: Lowlife.key, type: 'BADGE', badgeKey: Lowlife.key },
    { key: SilentWitness.key, type: 'BADGE', badgeKey: SilentWitness.key },
    { key: UndergroundExplorer.key, type: 'BADGE', badgeKey: UndergroundExplorer.key },
  ]],
}
