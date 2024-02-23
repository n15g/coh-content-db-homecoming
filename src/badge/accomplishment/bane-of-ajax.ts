import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const BaneOfAjax: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "bane-of-ajax",
    setTitleId: 1585,
    names: [
        {value: "Bane of Ajax"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You've proven to Ajax, and the world, that no one is truly invincible."}
    ],
    acquisition: "Complete the story arc from Dean MacArthur",
    links: [
        {title: "Bane of Ajax Badge", href: "https://homecoming.wiki/wiki/Bane_of_Ajax_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/bane-of-ajax.png"}
    ],
};
