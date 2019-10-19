import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {IndependencePort} from "../../map/independence-port";
import {CreyHavoc} from "../exploration/crey-havoc";
import {Valorous} from "../exploration/valorous";
import {Vigorous} from "../exploration/vigorous";
import {AirLifter} from "../exploration/air-lifter";
import {DeadEnd} from "../exploration/dead-end";
import {FamilyPartier} from "../exploration/family-partier";
import {Connector} from "../exploration/connector";
import {Unlucky} from "../exploration/unlucky";

export const IPAddress: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "ip-address",
    setTitleId: 1557,
    names: [
        {value: "IP Address"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Independence Port.`}
    ],
    notes: `Visit all exploration badges in [map:${IndependencePort.key}]`,
    links: [
        {title: "IP Address Badge", href: "https://paragonwiki.com/wiki/IP_Address_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
            {key: CreyHavoc.key, type: BadgePartialType.BADGE, badgeKey: CreyHavoc.key},
            {key: Valorous.key, type: BadgePartialType.BADGE, badgeKey: Valorous.key},
            {key: Vigorous.key, type: BadgePartialType.BADGE, badgeKey: Vigorous.key},
            {key: AirLifter.key, type: BadgePartialType.BADGE, badgeKey: AirLifter.key},
            {key: DeadEnd.key, type: BadgePartialType.BADGE, badgeKey: DeadEnd.key},
            {key: FamilyPartier.key, type: BadgePartialType.BADGE, badgeKey: FamilyPartier.key},
            {key: Connector.key, type: BadgePartialType.BADGE, badgeKey: Connector.key},
            {key: Unlucky.key, type: BadgePartialType.BADGE, badgeKey: Unlucky.key}
    ]
};