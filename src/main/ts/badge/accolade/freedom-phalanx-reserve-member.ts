import { BadgeData } from 'coh-content-db'
import { Authority } from '../history/authority'
import { Brawler } from '../exploration/brawler'
import { Gearsmasher } from '../defeat/gearsmasher'
import { KeenSighted } from '../exploration/keen-sighted'
import { NimbleMynx } from '../exploration/nimble-mynx'
import { Purifier } from '../exploration/purifier'
import { Regal } from '../exploration/regal'
import { Summoned } from '../exploration/summoned'
import { TankBuster } from '../defeat/tank-buster'
import { Unveiler } from '../defeat/unveiler'
import { Vigorous } from '../exploration/vigorous'

export const FreedomPhalanxReserveMember: BadgeData = {
  type: 'accolade',
  key: 'freedom-phalanx-reserve-member',
  setTitleId: [161],
  name: [
    { alignment: 'hero', value: 'Freedom Phalanx Reserve Member' },
    { alignment: 'villain', value: 'Freedom Phalanx Fallen' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You have earned a reserve membership into Paragon City's premier Super Group: Freedom Phalanx. This privilege comes with the added perk of +10% Hit Points.` },
    { alignment: 'villain', value: `The Freedom Phalanx has stricken you from their rolls. All associated rights and privileges have been revoked.` },
  ],
  effect: 'Awards +10% Max Health.',
  links: [
    { title: 'Freedom Phalanx Reserve Member Badge', href: 'https://homecoming.wiki/wiki/Freedom_Phalanx_Reserve_Member_Badge' },
    { title: 'Freedom Phalanx Fallen Badge', href: 'https://homecoming.wiki/wiki/Freedom_Phalanx_Fallen_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/freedom-phalanx-reserve-member.png',
  requirements: [
    { key: Authority.key, type: 'badge', badgeKey: Authority.key },
    { key: Brawler.key, type: 'badge', badgeKey: Brawler.key },
    { key: Gearsmasher.key, type: 'badge', badgeKey: Gearsmasher.key },
    { key: KeenSighted.key, type: 'badge', badgeKey: KeenSighted.key },
    { key: NimbleMynx.key, type: 'badge', badgeKey: NimbleMynx.key },
    { key: Purifier.key, type: 'badge', badgeKey: Purifier.key },
    { key: Regal.key, type: 'badge', badgeKey: Regal.key },
    { key: Summoned.key, type: 'badge', badgeKey: Summoned.key },
    { key: TankBuster.key, type: 'badge', badgeKey: TankBuster.key },
    { key: Unveiler.key, type: 'badge', badgeKey: Unveiler.key },
    { key: Vigorous.key, type: 'badge', badgeKey: Vigorous.key },
  ],
}
