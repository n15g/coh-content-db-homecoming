import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Terror: IBadgeData = {
    type: BadgeType.EVENT,
    key: "terror",
    names: [
        {value: "Terror"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The legions of terrible spectral fiends that guarded their Banner of Terror were no match for you."},
    ],
    acquisition: "Defeat the Banner of Terror during a Deadly Apocalypse.",
    links: [
        {title: "Terror Badge", href: "https://paragonwiki.com/wiki/Terror_Badge"}
    ],
    imageKeys: [{value: "core.event.terror"}]
};
