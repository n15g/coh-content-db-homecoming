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
  type: 'ACCOLADE',
  key: 'freedom-phalanx-reserve-member',
  setTitle: { id: 161 },
  name: [
    { alignment: 'H', value: 'Freedom Phalanx Reserve Member' },
    { alignment: 'V', value: 'Freedom Phalanx Fallen' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `You have earned a reserve membership into Paragon City's premier Super Group: Freedom Phalanx. This privilege comes with the added perk of +10% Hit Points.` },
    { alignment: 'V', value: `The Freedom Phalanx has stricken you from their rolls. All associated rights and privileges have been revoked.` },
  ],
  effect: 'Awards +10% Max Health.',
  links: [
    { title: 'Freedom Phalanx Reserve Member Badge', href: 'https://homecoming.wiki/wiki/Freedom_Phalanx_Reserve_Member_Badge' },
    { title: 'Freedom Phalanx Fallen Badge', href: 'https://homecoming.wiki/wiki/Freedom_Phalanx_Fallen_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/freedom-phalanx-reserve-member.png' },
  ],
  requirements: [
    { key: Authority.key, type: 'BADGE', badgeKey: Authority.key },
    { key: Brawler.key, type: 'BADGE', badgeKey: Brawler.key },
    { key: Gearsmasher.key, type: 'BADGE', badgeKey: Gearsmasher.key },
    { key: KeenSighted.key, type: 'BADGE', badgeKey: KeenSighted.key },
    { key: NimbleMynx.key, type: 'BADGE', badgeKey: NimbleMynx.key },
    { key: Purifier.key, type: 'BADGE', badgeKey: Purifier.key },
    { key: Regal.key, type: 'BADGE', badgeKey: Regal.key },
    { key: Summoned.key, type: 'BADGE', badgeKey: Summoned.key },
    { key: TankBuster.key, type: 'BADGE', badgeKey: TankBuster.key },
    { key: Unveiler.key, type: 'BADGE', badgeKey: Unveiler.key },
    { key: Vigorous.key, type: 'BADGE', badgeKey: Vigorous.key },
  ],
}
