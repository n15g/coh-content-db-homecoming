import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const TempusFugitive: IBadgeData = {
    type: BadgeType.PVP,
    key: "tempus-fugitive",
    setTitleId: 372,
    names: [
        {type: Alternate.H, value: "Tempus Fugitive"},
        {type: Alternate.V, value: "Destroyer of Worlds"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "(Issue 25) Win Recluse's Victory with 1000 temporal points.",
    links: [
        {title: "Tempus Fugitive Badge", href: "https://paragonwiki.com/wiki/Tempus_Fugitive_Badge"},
        {title: "Destroyer of Worlds Badge", href: "https://paragonwiki.com/wiki/Destroyer_of_Worlds_Badge"}
    ],
};