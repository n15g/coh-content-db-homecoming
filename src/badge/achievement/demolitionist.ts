import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Demolitionist: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "demolitionist",
    setTitleId: 842,
    names: [
        {value: "Demolitionist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped place 10 bombs on the crashed Rikti ship in the Rikti War Zone."}
    ],
    acquisition: "Plant a bomb on the Rikti Mothership 10 times during Rikti Ship Raids",
    links: [
        {title: "Demolitionist Badge", href: "https://paragonwiki.com/wiki/Demolitionist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/demolitionist.png"}
    ],
};