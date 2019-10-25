import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";
import {Lobbyist} from "../exploration/lobbyist";
import {Hungry} from "../exploration/hungry";
import {Imploding} from "../exploration/imploding";
import {Ghoulish} from "../exploration/ghoulish";
import {WhatLurksBeyond} from "../exploration/what-lurks-beyond";
import {Restless} from "../exploration/restless";
import {MostlyHarmless} from "../exploration/mostly-harmless";
import {Burgermeister} from "../exploration/burgermeister";

export const BadBlood: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "bad-blood",
    setTitleId: 2409,
    names: [
        {value: "Bad Blood"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/pvp-acc.png"}],
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Bloody Bay.`}
    ],
    notes: `Visit all exploration badges in [map:${BloodyBay.key}]`,
    links: [
        {title: "Bad Blood Badge", href: "https://paragonwiki.com/wiki/Bad_Blood_Badge"}
    ],
    partials: [
        {key: Lobbyist.key, type: BadgePartialType.BADGE, badgeKey: Lobbyist.key},
        {key: Hungry.key, type: BadgePartialType.BADGE, badgeKey: Hungry.key},
        {key: Imploding.key, type: BadgePartialType.BADGE, badgeKey: Imploding.key},
        {key: Ghoulish.key, type: BadgePartialType.BADGE, badgeKey: Ghoulish.key},
        {key: WhatLurksBeyond.key, type: BadgePartialType.BADGE, badgeKey: WhatLurksBeyond.key},
        {key: Restless.key, type: BadgePartialType.BADGE, badgeKey: Restless.key},
        {key: MostlyHarmless.key, type: BadgePartialType.BADGE, badgeKey: MostlyHarmless.key},
        {key: Burgermeister.key, type: BadgePartialType.BADGE, badgeKey: Burgermeister.key}
    ]
};
