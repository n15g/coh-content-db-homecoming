import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterofTPNCampus: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-tpn-campus",
    setTitleId: 2077,
    names: [
        {value: "Master of the TPN Campus"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have mastered the Incarnate Trial: TPN Campus."}
    ],
    acquisition: "Earn the Spin Doctor, News Flash, Fair & Balanced, Television Addict, and Tonight's Top Story badges",
    links: [
        {title: "Master of TPN Campus Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_TPN_Campus_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-tpn-campus.png"}
    ],
};
