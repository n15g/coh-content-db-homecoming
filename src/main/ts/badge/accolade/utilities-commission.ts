import { BadgeData } from 'coh-content-db'
import { ConjunctionJunction } from '../exploration/conjunction-junction'
import { DangerDanger } from '../exploration/danger-danger'
import { GuardianOfTheVolts } from '../exploration/guardian-of-the-volts'
import { HighVoltage } from '../exploration/high-voltage'
import { Meltdown } from '../exploration/meltdown'
import { NervousDreck } from '../exploration/nervous-dreck'
import { PowerWalker } from '../exploration/power-walker'
import { ScrapheapOfHistory } from '../exploration/scrapheap-of-history'

export const UtilitiesCommission: BadgeData = {
  type: 'accolade',
  key: 'utilities-commission',
  setTitleId: [1886],
  name: 'Utilities Commission',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Terra Volta.`,
  links: [
    { title: 'Utilities Commission Badge', href: 'https://homecoming.wiki/wiki/Utilities_Commission_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: ConjunctionJunction.key, type: 'badge', badgeKey: ConjunctionJunction.key },
    { key: DangerDanger.key, type: 'badge', badgeKey: DangerDanger.key },
    { key: GuardianOfTheVolts.key, type: 'badge', badgeKey: GuardianOfTheVolts.key },
    { key: HighVoltage.key, type: 'badge', badgeKey: HighVoltage.key },
    { key: Meltdown.key, type: 'badge', badgeKey: Meltdown.key },
    { key: NervousDreck.key, type: 'badge', badgeKey: NervousDreck.key },
    { key: PowerWalker.key, type: 'badge', badgeKey: PowerWalker.key },
    { key: ScrapheapOfHistory.key, type: 'badge', badgeKey: ScrapheapOfHistory.key },
  ],
}
