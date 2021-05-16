import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Pedestrian: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "pedestrian",
    setTitleId: 550,
    names: [
        {type: Alternate.H, value: "Pedestrian"},
        {type: Alternate.V, value: "Impounder"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "No one sane lets you get anywhere close to their vehicles now."},
        {type: Alternate.V, value: "You've done your part to help keep Paragon City's streets clear of traffic."}
    ],
    acquisition: "Destroy 100 Cars in Mayhem Missions",
    links: [
        {title: "Pedestrian Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Pedestrian_Badge"},
        {title: "Impounder Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Impounder_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/pedestrian.png"}
    ],
};
