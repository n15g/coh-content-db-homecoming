import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const BurdenBearer: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "burden-bearer",
    setTitleId: 1760,
    names: [
        {type: Alternate.H, value: "Burden Bearer"},
        {type: Alternate.V, value: "Arm's Length"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "Who needs the help of police drones? You let them sit on the sidelines and took care of the " +
                "invasion yourself, while also making sure none of them were destroyed."
        },
        {
            type: Alternate.V, value: "You kept the police drones de-activated while also ensuring none of them were destroyed during " +
                "the attack on Kings Row. It didn't exactly scream 'good idea' to keep those drones activated " +
                "around you while standing in the heart of Paragon City."
        }
    ],
    acquisition: "Don't activate any drones in the first mission of the Apex Task Force",
    links: [
        {title: "Burden Bearer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Burden_Bearer_Badge"},
        {title: "Arm's Length Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Arm%27s_Length_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-tinmage.png"}
    ],
};
