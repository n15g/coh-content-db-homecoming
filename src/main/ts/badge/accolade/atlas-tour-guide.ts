import { BadgeData } from 'coh-content-db'
import { Undefeated } from '../exploration/undefeated'
import { SilentSentinel } from '../exploration/silent-sentinel'
import { HeroCorpsInsider } from '../exploration/hero-corps-insider'
import { Patriot } from '../exploration/patriot'
import { TopDog } from '../exploration/top-dog'
import { Freedom } from '../exploration/freedom'
import { EdgeOfChaos } from '../exploration/edge-of-chaos'
import { Observant } from '../exploration/observant'

export const AtlasTourGuide: BadgeData = {
  type: 'accolade',
  key: 'atlas-tour-guide',
  setTitleId: [1517],
  name: 'Atlas Tour Guide',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Atlas Park.`,
  links: [
    { title: 'Atlas Tour Guide Badge', href: 'https://homecoming.wiki/wiki/Atlas_Tour_Guide_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: Undefeated.key, type: 'badge', badgeKey: Undefeated.key },
    { key: SilentSentinel.key, type: 'badge', badgeKey: SilentSentinel.key },
    { key: HeroCorpsInsider.key, type: 'badge', badgeKey: HeroCorpsInsider.key },
    { key: Patriot.key, type: 'badge', badgeKey: Patriot.key },
    { key: TopDog.key, type: 'badge', badgeKey: TopDog.key },
    { key: Freedom.key, type: 'badge', badgeKey: Freedom.key },
    { key: EdgeOfChaos.key, type: 'badge', badgeKey: EdgeOfChaos.key },
    { key: Observant.key, type: 'badge', badgeKey: Observant.key },
  ],
}
