import { BadgeData } from 'coh-content-db'
import { BoomtownTroglodyte } from '../exploration/boomtown-troglodyte'
import { CorpseBox } from '../exploration/corpse-box'
import { DestinedForValhalla } from '../exploration/destined-for-valhalla'
import { EndOfTheLine } from '../exploration/end-of-the-line'
import { Phalanxer } from '../exploration/phalanxer'
import { Regal } from '../exploration/regal'
import { ToweringInferno } from '../exploration/towering-inferno'
import { VisionOfDespair } from '../exploration/vision-of-despair'

export const BoomGoesTheTown: BadgeData = {
  type: 'accolade',
  key: 'boom-goes-the-town',
  setTitleId: [1877],
  name: 'Boom... Goes the Town',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Boomtown.`,
  links: [
    { title: 'Boom... Goes the Town Badge', href: 'https://homecoming.wiki/wiki/Boom..._Goes_the_Town_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: BoomtownTroglodyte.key, type: 'badge', badgeKey: BoomtownTroglodyte.key },
    { key: CorpseBox.key, type: 'badge', badgeKey: CorpseBox.key },
    { key: DestinedForValhalla.key, type: 'badge', badgeKey: DestinedForValhalla.key },
    { key: EndOfTheLine.key, type: 'badge', badgeKey: EndOfTheLine.key },
    { key: Phalanxer.key, type: 'badge', badgeKey: Phalanxer.key },
    { key: Regal.key, type: 'badge', badgeKey: Regal.key },
    { key: ToweringInferno.key, type: 'badge', badgeKey: ToweringInferno.key },
    { key: VisionOfDespair.key, type: 'badge', badgeKey: VisionOfDespair.key },
  ],
}
