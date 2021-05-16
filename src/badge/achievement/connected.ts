import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Connected: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "connected",
    setTitleId: 1896,
    names: [
        {value: "Connected"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You've worked together with a contact in Sharkhead on the side while investigating the secrets " +
                "of the Blood Coral."
        }
    ],
    acquisition: "Work with one of the helping contacts in the story arc from Vincent Ross",
    links: [
        {title: "Connected Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Connected_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/connected.png"}
    ],
};
