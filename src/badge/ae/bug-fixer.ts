import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BugFixer: IBadgeData = {
    type: BadgeType.AE,
    key: "bug-fixer",
    names: [
        {value: "Bug Fixer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've tested one of your own missions assuring that it works as intended."}],
    acquisition: "Create a mission in the Mission Architect, and complete it in Test Mode.",
    links: [
        {title: "Bug Fixer Badge", href: "https://paragonwiki.com/wiki/Bug-Fixer_Badge"}
    ],
    imageKeys: [{value: "core.ae.bug-fixer"}]
};
