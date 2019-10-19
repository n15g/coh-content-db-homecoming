import {ALIGNMENT_ANY, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {VanguardRecruit} from "../day-job/vanguard-recruit";
import {Patroller} from "../day-job/patroller";

export const Mercenary: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "mercenary",
    setTitleId: 1071,
    names: [
        {value: "Mercenary"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Your work aiding Vanguard defend Paragon from the ever present Rikti threat and always being ready to aid Paragon City has earned you the Mercenary Accolade.  While logged out in the Vanguard Base you will earn charges for your Fragmentation Grenade Power.`},
        {type: Alternate.V, value: `Your work aiding Vanguard defeat the ever present Rikti threat and always being ready to spring into action has earned you the Mercenary Accolade.  While logged out in the Vanguard Base you will earn charges for your Fragmentation Grenade Power.`}
    ],
    notes: `Earn the [badge:vanguard-recruit] and [badge:patroller] Day Jobs`,
    links: [
        {title: "Mercenary Badge", href: "https://paragonwiki.com/wiki/Mercenary_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/mercenary.png"}
    ],
    partials: [
            {key: VanguardRecruit.key, type: BadgePartialType.BADGE, badgeKey: VanguardRecruit.key},
            {key: Patroller.key, type: BadgePartialType.BADGE, badgeKey: Patroller.key}
    ]
};