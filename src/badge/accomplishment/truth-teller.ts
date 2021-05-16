import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TruthTeller: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "truth-teller",
    setTitleId: 2199,
    names: [
        {value: "Truth Teller"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You played through Dream Doctor's personal story, witnessing the event where Dream Doctor " +
                "confronted Mender Silos and revealed why he harbors such a large hatred for Ouroboros."
        }
    ],
    acquisition: "Complete the personal story mission from Dream Doctor",
    links: [
        {title: "Truth Teller Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Truth_Teller_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png"}
    ],
};
