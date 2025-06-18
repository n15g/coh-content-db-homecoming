import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from 'coh-content-db'
import {OnTheShouldersOfGiants} from '../exploration/on-the-shoulders-of-giants'
import {InTheirPrime} from '../exploration/in-their-prime'
import {ProtestTooMuch} from '../exploration/protest-too-much'
import {FueledByGreed} from '../exploration/fueled-by-greed'
import {RavingMad} from '../exploration/raving-mad'
import {MarkedOut} from '../exploration/marked-out'
import {QuayToTheCity} from '../exploration/quay-to-the-city'
import {TouristTrapped} from '../exploration/tourist-trapped'

export const ThePrettiestOne: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: 'the-prettiest-one',
    setTitleId: 2448,
    names: [
        {value: 'The Prettiest One'}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Kallisti Wharf.`}
    ],
    links: [
        {title: 'The Prettiest One Badge', href: 'https://homecoming.wiki/wiki/The_Prettiest_One_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png'}
    ],
    partials: [
        {key: OnTheShouldersOfGiants.key, type: BadgePartialType.BADGE, badgeKey: OnTheShouldersOfGiants.key},
        {key: InTheirPrime.key, type: BadgePartialType.BADGE, badgeKey: InTheirPrime.key},
        {key: ProtestTooMuch.key, type: BadgePartialType.BADGE, badgeKey: ProtestTooMuch.key},
        {key: FueledByGreed.key, type: BadgePartialType.BADGE, badgeKey: FueledByGreed.key},
        {key: RavingMad.key, type: BadgePartialType.BADGE, badgeKey: RavingMad.key},
        {key: MarkedOut.key, type: BadgePartialType.BADGE, badgeKey: MarkedOut.key},
        {key: QuayToTheCity.key, type: BadgePartialType.BADGE, badgeKey: QuayToTheCity.key},
        {key: TouristTrapped.key, type: BadgePartialType.BADGE, badgeKey: TouristTrapped.key},
    ],
}
