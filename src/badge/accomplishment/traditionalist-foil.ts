import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TraditionalistFoil: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "traditionalist-foil",
    setTitleId: 2499,
    names: [
        {value: "Traditionalist Foil"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You learned about the two core Rikti factions, Traditionalist and Restructurist, while foiling a plot to mutate humans into Traditionalist conscripts.`}
    ],
    acquisition: `Complete the Stop the Rikti assault mission from Steven Sheridan`,
    links: [
        {title: "Traditionalist Foil Badge", href: "https://homecoming.wiki/wiki/Traditionalist_Foil_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/traditionalist-foil.png"}
    ],
};