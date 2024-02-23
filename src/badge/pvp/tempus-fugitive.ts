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
    badgeText: [
        {type: Alternate.H, value: `You have battled Arachnos in a possible future and prevented Recluse's Victory.`},
        {type: Alternate.V, value: `You have fought the future and won, making Recluse's Victory that much more likely.`}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/tempus-fugitive.png"}],
    acquisition: "(Issue 25) Win Recluse's Victory with 1000 temporal points.",
    links: [
        {title: "Tempus Fugitive Badge", href: "https://homecoming.wiki/wiki/Tempus_Fugitive_Badge"},
        {title: "Destroyer of Worlds Badge", href: "https://homecoming.wiki/wiki/Destroyer_of_Worlds_Badge"}
    ],
};
