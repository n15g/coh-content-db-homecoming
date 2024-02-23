import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const GoonSquad: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "goon-squad",
    setTitleId: 406,
    names: [
        {value: "Goon Squad"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Nobody better strike the Consortium while you're around."}
    ],
    acquisition: "Defeat 333 Cage Consortium Guards",
    links: [
        {title: "Goon Squad Badge", href: "https://homecoming.wiki/wiki/Goon_Squad_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/goon-squad.png"}
    ],
};
