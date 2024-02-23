import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Chief: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "chief",
    setTitleId: 835,
    names: [
        {value: "Chief"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 10 Rikti Heavy Assault mechs."}
    ],
    acquisition: "Defeat 10 Rikti Heavy Assault Suits during a Rikti World Invasion",
    links: [
        {title: "Chief Badge", href: "https://homecoming.wiki/wiki/Chief_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/new-rikti.png"}
    ],
};
