import {ALIGNMENT_ANY, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Professor} from "../day-job/professor";
import {Caregiver} from "../day-job/caregiver";

export const Physician: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "physician",
    setTitleId: 1067,
    names: [
        {value: "Physician"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Your studies at the Universities of Paragon City and work with the hospitals of Paragon have earned you the Physician Accolade.  While logged out at a Univeristy or inside a Hospital you will earn charges for your Revive Ally power.`},
        {type: Alternate.V, value: `Your studies at the Universities of the Rogue Isles and work within the Hospitals of the Rogue Isles have earned you the Physician Accolade.  While logged out at a University or inside a Hospital you will earn charges for your Revive Ally power.`}
    ],
    notes: `Earn the [badge:professor] and [badge:caregiver] Day Jobs`,
    links: [
        {title: "Physician Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Physician_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/physician.png"}
    ],
    partials: [
        {key: Professor.key, type: BadgePartialType.BADGE, badgeKey: Professor.key},
        {key: Caregiver.key, type: BadgePartialType.BADGE, badgeKey: Caregiver.key}
    ]
};
