import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const StoneCold: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "stone-cold",
    setTitleId: 330,
    names: [
        {value: "Stone Cold"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You took out a filthy traitor to the Port Oakes Vendetti Family."}
    ],
    acquisition: "Complete the Deal with Niles Worthington mission from Angelo Vendetti",
    links: [
        {title: "Stone Cold Badge", href: "https://paragonwiki.com/wiki/Stone_Cold_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-1.png"}
    ],
};
