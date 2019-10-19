import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BugHunter: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "bug-hunter",
    names: [
        {value: "Bug Hunter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Your stalwart efforts in tracking down and eradicating evil bugs have been recognized by the Paragon City authorities. Thanks to you, the City of Heroes has its pests firmly under control.`}
    ],
    notes: `Have a Developer recognize a game-breaking bug that you discovered and reported`,
    links: [
        {title: "Bug Hunter Badge", href: "https://paragonwiki.com/wiki/Bug_Hunter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/bug-hunter.png"}
    ]
};
