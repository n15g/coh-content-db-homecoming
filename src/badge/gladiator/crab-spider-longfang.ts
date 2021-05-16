import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const CrabSpiderLongfang: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "crab-spider-longfang",
    setTitleId: 445,
    names: [
        {value: "Crab Spider Longfang"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "One fight is as good as another to the Longfangs."}
    ],
    acquisition: "Complete a Patron's story arc. (Arachnos)",
    links: [
        {title: "Crab Spider Longfang Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Crab_Spider_Longfang_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
