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
  type: 'accolade',
  key: 'geas-of-the-kind-ones',
  setTitleId: [435],
  name: 'Geas of the Kind Ones',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `Whatever spirits watch over Croatoa have bestowed their blessing upon you. Of course, sometimes a blessing can be more like a curse.` },
    { alignment: 'villain', value: `Whatever spirits watch over Croatoa have taken back their blessing from you. Apparently they feel you are no longer worthy.` },
  ],
  effect: `Awards the Geas of the Kind Ones power.`,
  links: [
    { title: 'Geas of the Kind Ones Badge', href: 'https://homecoming.wiki/wiki/Geas_of_the_Kind_Ones_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/geas-of-the-kind-ones.png',
  requirements: [
    { key: BaneOfDannan.key, type: 'badge', badgeKey: BaneOfDannan.key },
    { key: Believer.key, type: 'badge', badgeKey: Believer.key },
    { key: Cabalist.key, type: 'badge', badgeKey: Cabalist.key },
    { key: CapBuster.key, type: 'badge', badgeKey: CapBuster.key },
    { key: GiantKiller.key, type: 'badge', badgeKey: GiantKiller.key },
    { key: Haunted.key, type: 'badge', badgeKey: Haunted.key },
    { key: PumpkinKing.key, type: 'badge', badgeKey: PumpkinKing.key },
    { key: PumpkinMaster.key, type: 'badge', badgeKey: PumpkinMaster.key },
    { key: Spellbinding.key, type: 'badge', badgeKey: Spellbinding.key },
  ],
}
