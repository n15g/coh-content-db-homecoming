import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const JudgeJury: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "judge-jury",
    setTitleId: 1466,
    names: [
        {type: Alternate.H, value: "Judge & Jury"},
        {type: Alternate.V, value: "Merciless"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You defeated one of the signature \"Rogues Gallery\" characters in an Alignment or Morality " +
        "mission earning yourself this badge."}
    ],
    acquisition: "Defeat a Rogue's Gallery character in an Alignment Mission or a Morality Mission",
    links: [
        {title: "Judge & Jury Badge", href: "https://paragonwiki.com/wiki/Judge_%26_Jury_Badge"},
        {title: "Merciless Badge", href: "https://paragonwiki.com/wiki/Merciless_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/judge-jury.png"}
    ],
};
