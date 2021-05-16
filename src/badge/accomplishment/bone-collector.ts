import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const BoneCollector: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "bone-collector",
    setTitleId: 331,
    names: [
        {value: "Bone Collector"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You recovered Mr. Bocor's necromantic Loa Bone."}
    ],
    acquisition: "Complete the Retrieve Loa Bonemission from Mr. Bocor",
    links: [
        {title: "Bone Collector Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bone_Collector_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-1.png"}
    ],
};
