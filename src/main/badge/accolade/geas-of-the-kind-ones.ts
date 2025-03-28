import { BadgeData } from 'coh-content-db'
import { BaneOfDannan } from '../defeat/bane-of-dannan'
import { Believer } from '../defeat/believer'
import { Cabalist } from '../accomplishment/cabalist'
import { CapBuster } from '../defeat/cap-buster'
import { GiantKiller } from '../defeat/giant-killer'
import { Haunted } from '../defeat/haunted'
import { PumpkinKing } from '../defeat/pumpkin-king'
import { PumpkinMaster } from '../defeat/pumpkin-master'
import { Spellbinding } from '../defeat/spellbinding'

export const GeasOfTheKindOnes: BadgeData = {
  type: 'ACCOLADE',
  key: 'geas-of-the-kind-ones',
  setTitle: { id: 435 },
  name: [
    { value: 'Geas of the Kind Ones' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `Whatever spirits watch over Croatoa have bestowed their blessing upon you. Of course, sometimes a blessing can be more like a curse.` },
    { alignment: 'V', value: `Whatever spirits watch over Croatoa have taken back their blessing from you. Apparently they feel you are no longer worthy.` },
  ],
  notes: `Awards the Geas of the Kind Ones power`,
  links: [
    { title: 'Geas of the Kind Ones Badge', href: 'https://homecoming.wiki/wiki/Geas_of_the_Kind_Ones_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/geas-of-the-kind-ones.png' },
  ],
  effect: `Geas of the Kind Ones`,
  requirements: [[
    { key: BaneOfDannan.key, type: 'BADGE', badgeKey: BaneOfDannan.key },
    { key: Believer.key, type: 'BADGE', badgeKey: Believer.key },
    { key: Cabalist.key, type: 'BADGE', badgeKey: Cabalist.key },
    { key: CapBuster.key, type: 'BADGE', badgeKey: CapBuster.key },
    { key: GiantKiller.key, type: 'BADGE', badgeKey: GiantKiller.key },
    { key: Haunted.key, type: 'BADGE', badgeKey: Haunted.key },
    { key: PumpkinKing.key, type: 'BADGE', badgeKey: PumpkinKing.key },
    { key: PumpkinMaster.key, type: 'BADGE', badgeKey: PumpkinMaster.key },
    { key: Spellbinding.key, type: 'BADGE', badgeKey: Spellbinding.key },
  ]],
}
