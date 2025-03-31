import { BadgeData } from 'coh-content-db'
import { Ambitious } from '../exploration/ambitious'
import { CitizenCole } from '../exploration/citizen-cole'
import { CivicMinded } from '../exploration/civic-minded'
import { GuardiansOfJustice } from '../exploration/guardians-of-justice'
import { IntoTheWild } from '../exploration/into-the-wild'
import { Technophile } from '../exploration/technophile'
import { UnCivilSociety } from '../exploration/un-civil-society'
import { OnTheWaterfront } from '../exploration/on-the-waterfront'

export const PurePraetorian: BadgeData = {
  type: 'ACCOLADE',
  key: 'pure-praetorian',
  setTitle: { id: 1597 },
  name: [
    { value: 'Pure Praetorian' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Nova Praetoria.` },
  ],
  links: [
    { title: 'Pure Praetorian Badge', href: 'https://homecoming.wiki/wiki/Pure_Praetorian_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png' },
  ],
  requirements: [[
    { key: Ambitious.key, type: 'BADGE', badgeKey: Ambitious.key },
    { key: CitizenCole.key, type: 'BADGE', badgeKey: CitizenCole.key },
    { key: CivicMinded.key, type: 'BADGE', badgeKey: CivicMinded.key },
    { key: GuardiansOfJustice.key, type: 'BADGE', badgeKey: GuardiansOfJustice.key },
    { key: IntoTheWild.key, type: 'BADGE', badgeKey: IntoTheWild.key },
    { key: Technophile.key, type: 'BADGE', badgeKey: Technophile.key },
    { key: UnCivilSociety.key, type: 'BADGE', badgeKey: UnCivilSociety.key },
    { key: OnTheWaterfront.key, type: 'BADGE', badgeKey: OnTheWaterfront.key },
  ]],
}
