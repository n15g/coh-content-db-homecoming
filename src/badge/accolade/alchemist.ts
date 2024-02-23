import {ALIGNMENT_ANY, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Caregiver} from "../day-job/caregiver";
import {Midnighter} from "../day-job/midnighter";

export const Alchemist: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "alchemist",
    setTitleId: 1068,
    names: [
        {value: "Alchemist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Your arcane studies with the Midnighters and time spent working in the Hospitals of Paragon City has earned you the Alchemist Accolade.  While logged out within the Midnighter's Club or inside a Hospital you will earn charges for your Vitalize power.`},
        {type: Alternate.V, value: `Your arcane studies with the Midnighters and time spent working in the Hospitals of the Rogue Isles has earned you the Alchemist Accolade.  While logged out within the Midnighter's Club or inside a Hospital you will earn charges for your Vitalize power.`}
    ],
    notes: `Earn the [badge:caregiver] and [badge:midnighter] Day Jobs`,
    links: [
        {title: "Alchemist Badge", href: "https://homecoming.wiki/wiki/Alchemist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/alchemist.png"}
    ],
    partials: [
        {key: Caregiver.key, type: BadgePartialType.BADGE, badgeKey: Caregiver.key},
        {key: Midnighter.key, type: BadgePartialType.BADGE, badgeKey: Midnighter.key}
    ]
};
