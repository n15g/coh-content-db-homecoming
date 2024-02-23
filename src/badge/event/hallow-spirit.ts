import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HallowSpirit: IBadgeData = {
    type: BadgeType.EVENT,
    key: "hallow-spirit",
    setTitleId: 184,
    names: [
        {value: "Hallow Spirit"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped defeat a manifestation of Eochai, king of the Fir Bolg."},
    ],
    acquisition: "Defeat the manifestation of Eochai during the Halloween event.",
    links: [
        {title: "Hallow Spirit Badge", href: "https://homecoming.wiki/wiki/Hallow_Spirit_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/hallow-spirit.png"}]
};
