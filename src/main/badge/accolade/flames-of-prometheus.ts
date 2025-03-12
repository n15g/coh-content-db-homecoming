import { BadgeData } from 'coh-content-db'

export const FlamesOfPrometheus: BadgeData = {
  type: 'ACCOLADE',
  key: 'flames-of-prometheus',
  setTitle: { id: 2003 },
  name: [
    { value: 'Flames of Prometheus' },
  ],
  alignment: ['V'],
  acquisition: `Complete the Mortimer Kal Strike Force`,
  notes: `The Mortimer Kal Strike Force is available from Mortimer Kal in Sharkhead Island.
    
This badge can be redeemed for a Notice of the Well at level 50.

**Once redeemed, this badge is no longer obtainable. This badge is not included in badge totals.**`,
  links: [
    { title: 'Flames of Prometheus Badge', href: 'https://homecoming.wiki/wiki/Flames_of_Prometheus' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/flames-of-prometheus.png' },
  ],
  ignoreInTotals: true,
}
