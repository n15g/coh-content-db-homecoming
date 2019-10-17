import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const ExplosiveFinale: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "explosive-finale",
    names: [
        {value: "Explosive Finale"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Protean thought he could put an end to you by blowing you up - you proved him wrong."}
    ],
    acquisition: "Complete the story arc from Leonard",
    links: [
        {title: "Explosive Finale Badge", href: "https://paragonwiki.com/wiki/Explosive_Finale_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/explosive-finale.png"}
    ],
};