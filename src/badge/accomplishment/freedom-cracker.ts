import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const FreedomCracker: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "freedom-cracker",
    setTitleId: 2013,
    names: [
        {value: "Freedom Cracker"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You've kicked Longbow out of Fort Darwin, showing them that they don't belong in the Rogue " +
                "Isles!"
        }
    ],
    acquisition: "Complete Lt. Harris' story arc in Mercy Island",
    links: [
        {title: "Freedom Cracker Badge", href: "https://homecoming.wiki/wiki/Freedom_Cracker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/freedom-cracker.png"}
    ],
};
