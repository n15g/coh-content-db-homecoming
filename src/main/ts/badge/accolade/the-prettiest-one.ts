import { BadgeData } from 'coh-content-db'
import { OnTheShouldersOfGiants } from '../exploration/on-the-shoulders-of-giants'
import { InTheirPrime } from '../exploration/in-their-prime'
import { ProtestTooMuch } from '../exploration/protest-too-much'
import { FueledByGreed } from '../exploration/fueled-by-greed'
import { RavingMad } from '../exploration/raving-mad'
import { MarkedOut } from '../exploration/marked-out'
import { QuayToTheCity } from '../exploration/quay-to-the-city'
import { TouristTrapped } from '../exploration/tourist-trapped'

export const ThePrettiestOne: BadgeData = {
  type: 'accolade',
  key: 'the-prettiest-one',
  setTitleId: [2448],
  name: 'The Prettiest One',
  releaseDate: '2025-06-17',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Kallisti Wharf.`,
  links: [
    { title: 'The Prettiest One Badge', href: 'https://homecoming.wiki/wiki/The_Prettiest_One_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: OnTheShouldersOfGiants.key, type: 'badge', badgeKey: OnTheShouldersOfGiants.key },
    { key: InTheirPrime.key, type: 'badge', badgeKey: InTheirPrime.key },
    { key: ProtestTooMuch.key, type: 'badge', badgeKey: ProtestTooMuch.key },
    { key: FueledByGreed.key, type: 'badge', badgeKey: FueledByGreed.key },
    { key: RavingMad.key, type: 'badge', badgeKey: RavingMad.key },
    { key: MarkedOut.key, type: 'badge', badgeKey: MarkedOut.key },
    { key: QuayToTheCity.key, type: 'badge', badgeKey: QuayToTheCity.key },
    { key: TouristTrapped.key, type: 'badge', badgeKey: TouristTrapped.key },
  ],
}