import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HellHathNoFury: IBadgeData = {
    type: BadgeType.EVENT,
    key: "hell-hath-no-fury",
    setTitleId: 1368,
    names: [
        {value: "Hell Hath No Fury"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Your contribution in destroying the otherworldly Banner of Fiends proved to be key in thwarting the diabolic schemes of the mysterious Dark Fiends."},
    ],
    acquisition: "Defeat the Banner of Fiends during a Deadly Apocalypse.",
    links: [
        {title: "Hell Hath No Fury Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hell_Hath_No_Fury_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/hell-hath-no-fury.png"}]
};
