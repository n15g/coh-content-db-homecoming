import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {BombSquad} from "../achievement/bomb-squad";
import {FireMarshal} from "../achievement/fire-marshal";
import {Interceptor} from "../achievement/interceptor";
import {SecurityExpert} from "../achievement/security-expert";
import {PPDDeputy} from "../achievement/ppd-deputy";

export const ForceOfJustice: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "force-of-justice",
    setTitleId: 646,
    names: [
        {type: Alternate.H, value: "Force of Justice"},
        {type: Alternate.V, value: "Force of Injustice"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `You have proven yourself as one of Paragon City's finest heroes by protecting all of the major banks in the city.`},
        {type: Alternate.V, value: `Paragon's bank employees are very confused by your new allegiances, and are that much slower to react when you show up to rob them.`}
    ],
    notes: `Earn the six Safeguard side mission badges`,
    links: [
        {title: "Force of Justice Badge", href: "https://homecoming.wiki/wiki/Force_of_Justice_Badge"},
        {title: "Force of Injustice Badge", href: "https://homecoming.wiki/wiki/Force_of_Injustice_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/force-of-justice.png"}
    ],
    partials: [
        {key: BombSquad.key, type: BadgePartialType.BADGE, badgeKey: BombSquad.key},
        {key: FireMarshal.key, type: BadgePartialType.BADGE, badgeKey: FireMarshal.key},
        {key: Interceptor.key, type: BadgePartialType.BADGE, badgeKey: Interceptor.key},
        {key: PPDDeputy.key, type: BadgePartialType.BADGE, badgeKey: PPDDeputy.key},
        {key: SecurityExpert.key, type: BadgePartialType.BADGE, badgeKey: SecurityExpert.key}
    ]
};
