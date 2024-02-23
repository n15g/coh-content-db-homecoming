import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Corrupter: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "corrupter",
    setTitleId: 78,
    names: [
        {value: "Corrupter"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You prevented a non-aggression pact between the Circle of Thorns and Nemesis."}
    ],
    acquisition: "Complete the Rescue the O'Gaffney law firm from the Circle of Thorns mini-arc from Neal Kendrick or Tina Chung",
    links: [
        {title: "Corrupter Badge", href: "https://homecoming.wiki/wiki/Corrupter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/corrupter.png"}
    ],
};
