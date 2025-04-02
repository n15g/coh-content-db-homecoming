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
  type: 'ACCOLADE',
  key: 'boom-goes-the-town',
  setTitle: { id: 1877 },
  name: [
    { value: 'Boom... Goes the Town' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Boomtown.` },
  ],
  links: [
    { title: 'Boom... Goes the Town Badge', href: 'https://homecoming.wiki/wiki/Boom..._Goes_the_Town_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  requirements: [
    { key: BoomtownTroglodyte.key, type: 'BADGE', badgeKey: BoomtownTroglodyte.key },
    { key: CorpseBox.key, type: 'BADGE', badgeKey: CorpseBox.key },
    { key: DestinedForValhalla.key, type: 'BADGE', badgeKey: DestinedForValhalla.key },
    { key: EndOfTheLine.key, type: 'BADGE', badgeKey: EndOfTheLine.key },
    { key: Phalanxer.key, type: 'BADGE', badgeKey: Phalanxer.key },
    { key: Regal.key, type: 'BADGE', badgeKey: Regal.key },
    { key: ToweringInferno.key, type: 'BADGE', badgeKey: ToweringInferno.key },
    { key: VisionOfDespair.key, type: 'BADGE', badgeKey: VisionOfDespair.key },
  ],
}
