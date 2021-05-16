import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const FirebaseZuluSecurityDetail: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "firebase-zulu-security-detail",
    setTitleId: 206,
    names: [
        {type: Alternate.H, value: "Firebase Zulu Security Detail"},
        {type: Alternate.V, value: "Firebase Zulu Deserter"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H, value: "You have logged enough time in the Shadow Shard to be made a part of Firebase Zulu's security " +
                "detail."
        },
        {
            type: Alternate.V, value: "You once were part of Firebase Zulu's security detail, but have since abandoned them to the " +
                "ravages of the Shadow Shard."
        }
    ],
    acquisition: "Spend 3 minutes in the Shadow Shard",
    links: [
        {title: "Firebase Zulu Security Detail Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Firebase_Zulu_Security_Detail_Badge"},
        {title: "Firebase Zulu Deserter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Firebase_Zulu_Deserter_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png"}
    ],
};
