import { BadgeData } from 'coh-content-db'
import { AlphaRanger } from '../exploration/alpha-ranger'
import { DancerWithDeath } from '../exploration/dancer-with-death'
import { DefyingGravity } from '../exploration/defying-gravity'
import { DimensionalSojourner } from '../exploration/dimensional-sojourner'
import { ShadowArchitect } from '../exploration/shadow-architect'
import { ShardLeaper } from '../exploration/shard-leaper'
import { Stormwatcher } from '../exploration/stormwatcher'
import { XRaySpectator } from '../exploration/x-ray-spectator'

export const AllYourFirebase: BadgeData = {
  type: 'ACCOLADE',
  key: 'all-your-firebase',
  setTitle: { id: 1881 },
  name: 'All Your Firebase...',
  alignment: ['H'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Firebase Zulu.`,
  links: [
    { title: 'All Your Firebase... Badge', href: 'https://homecoming.wiki/wiki/All_Your_Firebase..._Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: AlphaRanger.key, type: 'BADGE', badgeKey: AlphaRanger.key },
    { key: DancerWithDeath.key, type: 'BADGE', badgeKey: DancerWithDeath.key },
    { key: DefyingGravity.key, type: 'BADGE', badgeKey: DefyingGravity.key },
    { key: DimensionalSojourner.key, type: 'BADGE', badgeKey: DimensionalSojourner.key },
    { key: ShadowArchitect.key, type: 'BADGE', badgeKey: ShadowArchitect.key },
    { key: ShardLeaper.key, type: 'BADGE', badgeKey: ShardLeaper.key },
    { key: Stormwatcher.key, type: 'BADGE', badgeKey: Stormwatcher.key },
    { key: XRaySpectator.key, type: 'BADGE', badgeKey: XRaySpectator.key },
  ],
}
