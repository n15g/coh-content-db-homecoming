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
  type: 'accolade',
  key: 'all-your-firebase',
  setTitleId: [1881],
  name: 'All Your Firebase...',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Firebase Zulu.`,
  links: [
    { title: 'All Your Firebase... Badge', href: 'https://homecoming.wiki/wiki/All_Your_Firebase..._Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: AlphaRanger.key, type: 'badge', badgeKey: AlphaRanger.key },
    { key: DancerWithDeath.key, type: 'badge', badgeKey: DancerWithDeath.key },
    { key: DefyingGravity.key, type: 'badge', badgeKey: DefyingGravity.key },
    { key: DimensionalSojourner.key, type: 'badge', badgeKey: DimensionalSojourner.key },
    { key: ShadowArchitect.key, type: 'badge', badgeKey: ShadowArchitect.key },
    { key: ShardLeaper.key, type: 'badge', badgeKey: ShardLeaper.key },
    { key: Stormwatcher.key, type: 'badge', badgeKey: Stormwatcher.key },
    { key: XRaySpectator.key, type: 'badge', badgeKey: XRaySpectator.key },
  ],
}
