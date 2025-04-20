import { BadgeData } from 'coh-content-db'
import { WeaponInspector } from '../exploration/weapon-inspector'
import { TunnelRat } from '../exploration/tunnel-rat'
import { Triumphant } from '../exploration/triumphant'
import { Nuclear } from '../exploration/nuclear'
import { ForciblyEvicted } from '../exploration/forcibly-evicted'
import { Disassembled } from '../exploration/disassembled'
import { GameOver } from '../exploration/game-over'
import { Herculean } from '../exploration/herculean'

export const Warlord: BadgeData = {
  type: 'accolade',
  key: 'warlord',
  setTitleId: [2420],
  name: 'Warlord',
  releaseDate: '2019-06-01',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Warburg.`,
  links: [
    { title: 'Warlord Badge', href: 'https://homecoming.wiki/wiki/Warlord_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/pvp-acc.png',
  requirements: [
    { key: WeaponInspector.key, type: 'badge', badgeKey: WeaponInspector.key },
    { key: TunnelRat.key, type: 'badge', badgeKey: TunnelRat.key },
    { key: Triumphant.key, type: 'badge', badgeKey: Triumphant.key },
    { key: Nuclear.key, type: 'badge', badgeKey: Nuclear.key },
    { key: ForciblyEvicted.key, type: 'badge', badgeKey: ForciblyEvicted.key },
    { key: Disassembled.key, type: 'badge', badgeKey: Disassembled.key },
    { key: GameOver.key, type: 'badge', badgeKey: GameOver.key },
    { key: Herculean.key, type: 'badge', badgeKey: Herculean.key },
  ],
}
