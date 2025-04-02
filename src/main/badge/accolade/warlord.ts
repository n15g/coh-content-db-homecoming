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
  type: 'ACCOLADE',
  key: 'warlord',
  setTitle: { id: 2420 },
  name: 'Warlord',
  alignment: ['H', 'V', 'P'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Warburg.`,
  links: [
    { title: 'Warlord Badge', href: 'https://homecoming.wiki/wiki/Warlord_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/pvp-acc.png',
  requirements: [
    { key: WeaponInspector.key, type: 'BADGE', badgeKey: WeaponInspector.key },
    { key: TunnelRat.key, type: 'BADGE', badgeKey: TunnelRat.key },
    { key: Triumphant.key, type: 'BADGE', badgeKey: Triumphant.key },
    { key: Nuclear.key, type: 'BADGE', badgeKey: Nuclear.key },
    { key: ForciblyEvicted.key, type: 'BADGE', badgeKey: ForciblyEvicted.key },
    { key: Disassembled.key, type: 'BADGE', badgeKey: Disassembled.key },
    { key: GameOver.key, type: 'BADGE', badgeKey: GameOver.key },
    { key: Herculean.key, type: 'BADGE', badgeKey: Herculean.key },
  ],
}
