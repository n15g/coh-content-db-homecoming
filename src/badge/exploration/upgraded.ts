import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";

export const Upgraded: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "upgraded",
    names: [{value: "Upgraded"}],
    alignment: ALIGNMENT_HERO,
    mapKey: KingsRow.key,
    location: [-496.0, 101.0, 768.0],
    badgeText: [{
        value: "Kord Technologies makes its home in this building, and Tony Kord frequently uses his personal helicopter to commute to work."
    }],
    notes: "The Upgraded Badge is located in Kings Row in the middle of a helicopter landing pad on a rooftop just N of Freedom Plaza." +
        "\n\nIt is located 67 Yards south of the pocket D entrance.",
    links: [
        {title: "Upgraded Badge", href: "https://paragonwiki.com/wiki/Upgraded_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "2"
};
