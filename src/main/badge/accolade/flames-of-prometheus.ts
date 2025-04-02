import { BadgeData } from 'coh-content-db'
import { MortimerKal } from '../../contact/mortimer-kal'

export const FlamesOfPrometheus: BadgeData = {
  type: 'ACCOLADE',
  key: 'flames-of-prometheus',
  setTitle: { id: 2003 },
  name: [
    { value: 'Flames of Prometheus' },
  ],
  alignment: ['V'],
  notes: `
This badge can be redeemed for a Notice of the Well at level 50.

**Once redeemed, this badge is no longer obtainable. This badge is not included in badge totals.**`,
  links: [
    { title: 'Flames of Prometheus Badge', href: 'https://homecoming.wiki/wiki/Flames_of_Prometheus' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/flames-of-prometheus.png' },
  ],
  requirements: [
    { key: 'mortimer-kal-strike-force', type: 'TASK_FORCE', missionName: 'Mortimer Kal Strike Force', contactKey: MortimerKal.key },
  ],
  ignoreInTotals: true,
}
