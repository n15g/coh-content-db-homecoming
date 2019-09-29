import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HallowSpirit: IBadgeData = {
    type: BadgeType.EVENT,
    key: "hallow-spirit",
    names: [
        {value: "Hallow Spirit"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped defeat a manifestation of Eochai, king of the Fir Bolg."},
    ],
    acquisition: "Defeat the manifestation of Eochai during the Halloween event.",
    links: [
        {title: "Hallow Spirit Badge", href: "https://paragonwiki.com/wiki/Hallow_Spirit_Badge"}
    ],
    imageKeys: [{value: "core.event.hallow-spirit"}]
};
