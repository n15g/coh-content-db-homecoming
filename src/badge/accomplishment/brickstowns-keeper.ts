import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const BrickstownsKeeper: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "brickstowns-keeper",
    setTitleId: 2256,
    names: [
        {value: "Brickstown's Keeper"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You worked with the New Praetorians to stop the biggest breakout that Brickstown has ever seen."}
    ],
    acquisition: "Complete the second story arc from Provost Marchand (Primal Earth)",
    links: [
        {title: "Brickstown's Keeper Badge", href: "https://homecoming.wiki/wiki/Brickstown%27s_Keeper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png"}
    ],
};
