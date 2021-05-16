import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const FortKnox: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "fort-knox",
    setTitleId: 310,
    names: [
        {value: "Fort Knox"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Word has gotten out that King Midas said you were 'tougher to crack than Fort Knox'"}
    ],
    acquisition: "Defeat 200 Gold Bricker Rocketmen",
    links: [
        {title: "Fort Knox Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Fort_Knox_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/fort-knox.png"}
    ],
};
