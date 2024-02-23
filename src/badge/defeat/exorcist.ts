import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Exorcist: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "exorcist",
    setTitleId: 2174,
    names: [
        {value: "Exorcist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have cast down demons and ancient spirits whose names are as royalty among the legions of " +
                "the netherworld."
        }
    ],
    acquisition: "Defeat 100 points worth of Incarnate-level Circle of Thorns",
    links: [
        {title: "Exorcist Badge", href: "https://homecoming.wiki/wiki/Exorcist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/exorcist.png"}
    ],
};
