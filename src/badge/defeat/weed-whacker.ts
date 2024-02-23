import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WeedWhacker: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "weed-whacker",
    setTitleId: 308,
    names: [
        {value: "Weed Whacker"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've cut down more than your fair share of the Thorns."}
    ],
    acquisition: "Defeat 50 Circle of Thorns Succubi or Hellfrosts",
    links: [
        {title: "Weed Whacker Badge", href: "https://homecoming.wiki/wiki/Weed_Whacker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/circle.png"}
    ],
};
