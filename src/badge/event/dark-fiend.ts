import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DarkFiend: IBadgeData = {
    type: BadgeType.EVENT,
    key: "dark-fiend",
    setTitleId: 1367,
    names: [
        {value: "Dark Fiend"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Your contribution in destroying the otherworldly Banner of Fiends proved to be key in thwarting the diabolic schemes of the mysterious Dark Fiends."},
    ],
    acquisition: "Defeat the Banner of Fiends during a Deadly Apocalypse.",
    links: [
        {title: "Dark Fiend Badge", href: "https://homecoming.wiki/wiki/Dark_Fiend_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/dark-fiend.png"}]
};
