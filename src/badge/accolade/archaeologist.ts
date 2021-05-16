import {ALIGNMENT_ANY, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Mortician} from "../day-job/mortician";
import {Midnighter} from "../day-job/midnighter";

export const Archaeologist: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "archaeologist",
    setTitleId: 1073,
    names: [
        {value: "Archaeologist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H,
            value: `Your time spent working with the Midnighters and uncovering the secrets of buried artifacts has earned you the Archaeologist Accolade.  While logged out in either the Midnighter Club or a Graveyard you will earn additional charges for your Rune of Purification power.`
        },
        {
            type: Alternate.V,
            value: `Your time spend working with the Midnighter and uncovering the secrets of buried artifacts has earned you the Archaeologist Accolade.  While logged out in either the Midnighter Club or a Graveyard you will earn additional charges for your Rune of Purification power.`
        }
    ],
    notes: `Earn the [badge:mortician] and [badge:midnighter] Day Jobs`,
    links: [
        {title: "Archaeologist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Archaeologist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/archaeologist.png"}
    ],
    partials: [
        {key: Mortician.key, type: BadgePartialType.BADGE, badgeKey: Mortician.key},
        {key: Midnighter.key, type: BadgePartialType.BADGE, badgeKey: Midnighter.key}
    ]
};
