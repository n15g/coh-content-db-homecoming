import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unconcerned: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "unconcerned",
    setTitleId: 2381,
    names: [
        {value: "Unconcerned"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png"}],
    badgeText: [
        {value: "Your skill and ability is recognized far and wide, but you appear quite indifferent."}
    ],
    acquisition: "Reject 100 inspiration drops",
    links: [
        {title: "Unconcerned Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Unconcerned_Badge"}
    ],
};
