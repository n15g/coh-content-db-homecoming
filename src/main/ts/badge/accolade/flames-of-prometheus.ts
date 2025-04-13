import { BadgeData } from 'coh-content-db'
import { MortimerKalStrikeForce } from '../../mission/mortimer-kal-strike-force'

export const FlamesOfPrometheus: BadgeData = {
  type: 'accolade',
  key: 'flames-of-prometheus',
  setTitleId: [2003],
  name: 'Flames of Prometheus',
  morality: 'villainous',
  badgeText: `Now that you have embarked upon the path of the Incarnate, you may convert the remaining effects of the Flames of Prometheus to one Notice of the Well Incarnate Component by
 clicking on the Convert button on the badge in the Badges / Accolades list.`,
  notes: `This badge can be redeemed for a Notice of the Well at level 50.

**Once redeemed, this badge is no longer obtainable. This badge is not included in badge totals.**`,
  links: [
    { title: 'Flames of Prometheus Badge', href: 'https://homecoming.wiki/wiki/Flames_of_Prometheus' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/flames-of-prometheus.png',
  requirements: [
    { key: MortimerKalStrikeForce.key, type: 'mission', missionKey: MortimerKalStrikeForce.key },
  ],
  ignoreInTotals: true,
}
