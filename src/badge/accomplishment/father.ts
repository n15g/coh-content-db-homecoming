import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Father: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "father",
    setTitleId: 2272,
    names: [
        {value: "Father"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You played Wu Yin's personal story and saw the plan that has been set in motion to try and " +
                "save Penelope Mayhem."
        }
    ],
    acquisition: "Complete the personal story from Wu Yin",
    links: [
        {title: "Father Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Father_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-parc.png"}
    ],
};
