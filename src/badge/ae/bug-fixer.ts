import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BugFixer: IBadgeData = {
    type: BadgeType.AE,
    key: "bug-fixer",
    setTitleId: 1203,
    names: [
        {value: "Bug Fixer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've tested one of your own missions assuring that it works as intended."}],
    acquisition: "Create a mission in the Mission Architect, and complete it in Test Mode.",
    links: [
        {title: "Bug Fixer Badge", href: "https://homecoming.wiki/wiki/Bug-Fixer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/bug-fixer.png"}]
};
