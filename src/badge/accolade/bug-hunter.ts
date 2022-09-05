import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BugHunter: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "bug-hunter",
    setTitleId: 215,
    names: [
        {value: "Bug Hunter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Your stalwart efforts in tracking down and eradicating evil bugs have been recognized by the Paragon City authorities. Thanks to you, the City of Heroes has its pests firmly under control.`}
    ],
    acquisition: `Awarded by the game developers for reporting a serious and/or game-breaking bug.`,
    notes: `**This badge is not included in badge totals.**`,
    links: [
        {title: "Bug Hunter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bug_Hunter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/bug-hunter.png"}
    ],
    ignoreInTotals: true
};
