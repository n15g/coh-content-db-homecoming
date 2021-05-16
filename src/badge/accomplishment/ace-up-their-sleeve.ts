import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const AceUpTheirSleeve: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "ace-up-their-sleeve",
    setTitleId: 2271,
    names: [
        {value: "Ace Up Their Sleeve"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You played the Center's personal story and saw that the Council has another ace up their " +
                "sleeve for future events."
        }
    ],
    acquisition: "Complete the personal story from The Center",
    links: [
        {title: "Ace Up Their Sleeve Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ace_Up_Their_Sleeve_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ace-up-their-sleeve.png"}
    ],
};
