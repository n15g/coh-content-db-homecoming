import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SafetyInNumbers: IBadgeData = {
    type: BadgeType.EVENT,
    key: "safety-in-numbers",
    setTitleId: 1021,
    names: [
        {value: "Safety in Numbers"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've taken out 33 Zombie Lieutenants, proving that there is Safety in Numbers."},
    ],
    acquisition: "Defeat 33 Zombie lieutenants during Zombie Apocalypses.",
    links: [
        {title: "Safety in Numbers Badge", href: "https://homecoming.wiki/wiki/Safety_in_Numbers_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/safety-in-numbers.png"}]
};
