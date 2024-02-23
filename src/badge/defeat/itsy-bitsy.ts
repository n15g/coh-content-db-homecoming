import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ItsyBitsy: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "itsy-bitsy",
    setTitleId: 2388,
    names: [
        {value: "Itsy Bitsy"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `You have defeated the Jade Spider and protected Siren's Call from Lord Recluse's assault.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/arachnos.png"}],
    acquisition: "Defeat the Jade Spider in Trading Places (Hero version).",
    links: [
        {title: "Itsy Bitsy Badge", href: "https://homecoming.wiki/wiki/Itsy_Bitsy_Badge"}
    ],
};
