import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Terminator: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "terminator",
    names: [
        {value: "Terminator"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    acquisition: "Kill 1000 citizens in mayhem missions",
    links: [
        {title: "Terminator Badge", href: "https://paragonwiki.com/wiki/Terminator_Badge"}
    ],
};
