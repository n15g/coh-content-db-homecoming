import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TheCentersNemesis: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-centers-nemesis",
    setTitleId: 2257,
    names: [
        {value: "The Center's Nemesis"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You stopped Calvin Scott and the Center's plans for Paragon City. The public of Paragon " +
                "consider you to be the one hero who can stop the Council."
        }
    ],
    acquisition: "Complete the third story arc from Provost Marchand (Primal Earth)",
    links: [
        {title: "The Center's Nemesis Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Center%27s_Nemesis_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png"}
    ],
};
