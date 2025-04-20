import { BadgeData } from 'coh-content-db'
import { BrokenMind } from '../exploration/broken-mind'
import { Condemning } from '../exploration/condemning'
import { Engineer } from '../exploration/engineer'
import { EyesOfTheDark } from '../exploration/eyes-of-the-dark'
import { Hoarder } from '../exploration/hoarder'
import { Lowlife } from '../exploration/lowlife'
import { SilentWitness } from '../exploration/silent-witness'
import { UndergroundExplorer } from '../exploration/underground-explorer'

export const BeneathTheEmpire: BadgeData = {
  type: 'accolade',
  key: 'beneath-the-empire',
  setTitleId: [1653],
  name: 'Beneath the Empire',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Imperial City's Underground.`,
  links: [
    { title: 'Beneath the Empire Badge', href: 'https://homecoming.wiki/wiki/Beneath_the_Empire_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png',
  requirements: [
    { key: BrokenMind.key, type: 'badge', badgeKey: BrokenMind.key },
    { key: Condemning.key, type: 'badge', badgeKey: Condemning.key },
    { key: Engineer.key, type: 'badge', badgeKey: Engineer.key },
    { key: EyesOfTheDark.key, type: 'badge', badgeKey: EyesOfTheDark.key },
    { key: Hoarder.key, type: 'badge', badgeKey: Hoarder.key },
    { key: Lowlife.key, type: 'badge', badgeKey: Lowlife.key },
    { key: SilentWitness.key, type: 'badge', badgeKey: SilentWitness.key },
    { key: UndergroundExplorer.key, type: 'badge', badgeKey: UndergroundExplorer.key },
  ],
}
