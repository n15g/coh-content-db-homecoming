import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Valet: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "valet",
    setTitleId: 2391,
    names: [
        {value: "Valet"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `You have kept Paragon City's vehicles safe during a Freakshow rampage.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/valet.png"}],
    acquisition: "Prevent destruction of vehicles around Wentworth's building during the Market Crash Task Force.",
    links: [
        {title: "Valet Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Valet_Badge"}
    ],
};
