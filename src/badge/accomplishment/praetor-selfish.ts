import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PraetorSelfish: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "praetor-selfish",
    setTitleId: 2197,
    names: [
        {value: "Praetor Selfish"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You played through Praetor Duncan's personal story, witnessing the event where Duncan was " +
                "confronted by her past and kidnapped by Diabolique and Mot."
        }
    ],
    acquisition: "Complete the personal story mission from Praetor Duncan",
    links: [
        {title: "Praetor Selfish Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Praetor_Selfish_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png"}
    ],
};
