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
  type: 'accolade',
  key: 'pure-praetorian',
  setTitleId: [1597],
  name: 'Pure Praetorian',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Nova Praetoria.`,
  links: [
    { title: 'Pure Praetorian Badge', href: 'https://homecoming.wiki/wiki/Pure_Praetorian_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png',
  requirements: [
    { key: Ambitious.key, type: 'badge', badgeKey: Ambitious.key },
    { key: CitizenCole.key, type: 'badge', badgeKey: CitizenCole.key },
    { key: CivicMinded.key, type: 'badge', badgeKey: CivicMinded.key },
    { key: GuardiansOfJustice.key, type: 'badge', badgeKey: GuardiansOfJustice.key },
    { key: IntoTheWild.key, type: 'badge', badgeKey: IntoTheWild.key },
    { key: Technophile.key, type: 'badge', badgeKey: Technophile.key },
    { key: UnCivilSociety.key, type: 'badge', badgeKey: UnCivilSociety.key },
    { key: OnTheWaterfront.key, type: 'badge', badgeKey: OnTheWaterfront.key },
  ],
}
