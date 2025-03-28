import { BadgeData, mapLink } from 'coh-content-db'
import { AtlasPark } from '../../map/atlas-park'
import { Undefeated } from '../exploration/undefeated'
import { SilentSentinel } from '../exploration/silent-sentinel'
import { HeroCorpsInsider } from '../exploration/hero-corps-insider'
import { Patriot } from '../exploration/patriot'
import { TopDog } from '../exploration/top-dog'
import { Freedom } from '../exploration/freedom'
import { EdgeOfChaos } from '../exploration/edge-of-chaos'
import { Observant } from '../exploration/observant'

export const AtlasTourGuide: BadgeData = {
  type: 'ACCOLADE',
  key: 'atlas-tour-guide',
  setTitle: { id: 1517 },
  name: [
    { value: 'Atlas Tour Guide' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Atlas Park.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(AtlasPark)}`,
  links: [
    { title: 'Atlas Tour Guide Badge', href: 'https://homecoming.wiki/wiki/Atlas_Tour_Guide_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  requirements: [[
    { key: Undefeated.key, type: 'BADGE', badgeKey: Undefeated.key },
    { key: SilentSentinel.key, type: 'BADGE', badgeKey: SilentSentinel.key },
    { key: HeroCorpsInsider.key, type: 'BADGE', badgeKey: HeroCorpsInsider.key },
    { key: Patriot.key, type: 'BADGE', badgeKey: Patriot.key },
    { key: TopDog.key, type: 'BADGE', badgeKey: TopDog.key },
    { key: Freedom.key, type: 'BADGE', badgeKey: Freedom.key },
    { key: EdgeOfChaos.key, type: 'BADGE', badgeKey: EdgeOfChaos.key },
    { key: Observant.key, type: 'BADGE', badgeKey: Observant.key },
  ]],
}
