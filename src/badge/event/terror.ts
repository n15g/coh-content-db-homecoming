import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Terror: IBadgeData = {
    type: BadgeType.EVENT,
    key: "terror",
    setTitleId: 1369,
    names: [
        {value: "Terror"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The legions of terrible spectral fiends that guarded their Banner of Terror were no match for you."},
    ],
    acquisition: "Defeat the Banner of Terror during a Deadly Apocalypse.",
    links: [
        {title: "Terror Badge", href: "https://homecoming.wiki/wiki/Terror_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/terror.png"}]
};
