import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Wailer: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "wailer",
    setTitleId: 457,
    names: [
        {value: "Wailer"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Your infamy has attracted supernatural notice."}
    ],
    acquisition: "Earn the [badge:stonekeeper] Badge (Wailers)",
    links: [
        {title: "Wailer Badge", href: "https://homecoming.wiki/wiki/Wailer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
