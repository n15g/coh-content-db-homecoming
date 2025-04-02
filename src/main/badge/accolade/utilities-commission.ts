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
  type: 'ACCOLADE',
  key: 'utilities-commission',
  setTitle: { id: 1886 },
  name: 'Utilities Commission',
  alignment: ['H'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Terra Volta.`,
  links: [
    { title: 'Utilities Commission Badge', href: 'https://homecoming.wiki/wiki/Utilities_Commission_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: ConjunctionJunction.key, type: 'BADGE', badgeKey: ConjunctionJunction.key },
    { key: DangerDanger.key, type: 'BADGE', badgeKey: DangerDanger.key },
    { key: GuardianOfTheVolts.key, type: 'BADGE', badgeKey: GuardianOfTheVolts.key },
    { key: HighVoltage.key, type: 'BADGE', badgeKey: HighVoltage.key },
    { key: Meltdown.key, type: 'BADGE', badgeKey: Meltdown.key },
    { key: NervousDreck.key, type: 'BADGE', badgeKey: NervousDreck.key },
    { key: PowerWalker.key, type: 'BADGE', badgeKey: PowerWalker.key },
    { key: ScrapheapOfHistory.key, type: 'BADGE', badgeKey: ScrapheapOfHistory.key },
  ],
}
