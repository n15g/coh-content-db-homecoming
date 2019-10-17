import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ImperialCitysSavior: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "imperial-citys-savior",
    setTitleId: 2217,
    names: [
        {value: "Imperial City's Savior"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You helped the forces of Primal Earth take Imperial City from Praetor Sinclair."}
    ],
    acquisition: "Complete the story arc from Belladonna Vetrano",
    links: [
        {title: "Imperial City's Savior Badge", href: "https://paragonwiki.com/wiki/Imperial_City%27s_Savior_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/imperial-citys-savior.png"}
    ],
};