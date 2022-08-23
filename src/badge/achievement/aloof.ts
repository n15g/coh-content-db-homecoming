import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Aloof: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "aloof",
    setTitleId: 2380,
    names: [
        {value: "Aloof"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png"}],
    badgeText: [
        {value: "Word of your accomplishments is spreading, but you don't seem to care much about it."}
    ],
    acquisition: "Reject 50 inspiration drops",
    links: [
        {title: "Aloof Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Aloof_Badge"}
    ],
};
