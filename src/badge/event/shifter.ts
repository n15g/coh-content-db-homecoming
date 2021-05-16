import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Shifter: IBadgeData = {
    type: BadgeType.EVENT,
    key: "shifter",
    setTitleId: 187,
    names: [
        {value: "Shifter"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 15 werewolves, supernatural creatures created through the disease of lycanthropy."},
    ],
    acquisition: "Defeat 15 Werewolves during the Halloween event.",
    links: [
        {title: "Shifter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Shifter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/shifter.png"}]
};
