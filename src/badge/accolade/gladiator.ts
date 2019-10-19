import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Duelist} from "../day-job/duelist";
import {Predator} from "../day-job/predator";

export const Gladiator: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "gladiator",
    setTitleId: 1075,
    names: [
        {value: "Gladiator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Your reputation as a ferocious combatant in both PvP Zones and the Arena has earned you the Gladiator Accolade.  While logged out in either an Arena or a PvP Zone you will additional time for your Combat Shield power.`}
    ],
    notes: `Earn the [badge:duelist] and [badge:predator] Day Jobs`,
    links: [
        {title: "Gladiator Badge", href: "https://paragonwiki.com/wiki/Gladiator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/gladiator.png"}
    ],
    partials: [
            {key: Duelist.key, type: BadgePartialType.BADGE, badgeKey: Duelist.key},
            {key: Predator.key, type: BadgePartialType.BADGE, badgeKey: Predator.key}
    ]
};