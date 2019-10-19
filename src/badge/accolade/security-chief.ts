import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {LawEnforcer} from "../day-job/law-enforcer";
import {Banker} from "../day-job/banker";

export const SecurityChief: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "security-chief",
    setTitleId: 1063,
    names: [
        {type: Alternate.H, value: "Security Chief"},
        {type: Alternate.V, value: "Security Breach"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Your time spent protecting the banks of Paragon City has earned you the position of Security Chief.  While logged out in either a Vault or a Police Department will earn you charges of Tear Gas.`},
        {type: Alternate.V, value: `Every major bank and secure facility had to change their locks and passcodes when you went to the Rogue Isles.`}
    ],
    notes: `Earn the [badge:law-enforcer] and [badge:banker] Day Jobs`,
    links: [
        {title: "Security Chief Badge", href: "https://paragonwiki.com/wiki/Security_Chief_Badge"},
        {title: "Security Breach Badge", href: "https://paragonwiki.com/wiki/Security_Breach_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/security-chief.png"}
    ],
    partials: [
            {key: LawEnforcer.key, type: BadgePartialType.BADGE, badgeKey: LawEnforcer.key},
            {key: Banker.key, type: BadgePartialType.BADGE, badgeKey: Banker.key}
    ]
};