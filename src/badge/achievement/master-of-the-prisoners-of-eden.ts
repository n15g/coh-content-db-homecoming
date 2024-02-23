import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfThePrisonersOfEden: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-the-prisoners-of-eden",
    setTitleId: 2489,
    names: [
        {value: "Master of the Prisoners of Eden"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have proven yourself Master of the Prisoners of Eden Trial.`}
    ],
    acquisition: `Complete the Master of the Prisoners of Eden challenge (zero defeats, temporary and incarnate powers disabled)`,
    links: [
        {title: "Master of the Prisoners of Eden Badge", href: "https://homecoming.wiki/wiki/Master_of_the_Prisoners_of_Eden_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-prisoners-of-eden.png"}
    ],
};
