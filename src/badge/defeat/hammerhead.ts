import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Hammerhead: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "hammerhead",
    setTitleId: 511,
    names: [
        {value: "Hammerhead"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have taken the hammer to the followers of Scrapyard."}
    ],
    acquisition: "Defeat 200 Ghost of Scrapyard's followers",
    links: [
        {title: "Hammerhead Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hammerhead_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/hammerhead.png"}
    ],
};
