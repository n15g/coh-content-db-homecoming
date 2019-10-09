import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const EarlyBird: IBadgeData = {
    type: BadgeType.AE,
    key: "early-bird",
    names: [
        {value: "Early Bird"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "Your eagerness to try out newly created Architect Missions has earned you the Early Bird badge. This badge is awarded to all characters on your account."}],
    acquisition: "Be one of the first players to rate a Mission Architect story arc.",
    links: [
        {title: "Early Bird Badge", href: "https://paragonwiki.com/wiki/Early_Bird_Badge"}
    ],
    icons: [{value: "core.ae.early-bird"}]
};
