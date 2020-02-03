import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const LordOfWinter: IBadgeData = {
    type: BadgeType.EVENT,
    key: "lord-of-winter",
    setTitleId: 1377,
    names: [
        {type: Alternate.M, value: "Lord of Winter"},
        {type: Alternate.F, value: "Lady of Winter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You helped thwart Lord Winter's scheme to turn Paragon City into an icy wasteland."},
        {type: Alternate.V, value: "You helped thwart Lord Winter's scheme to turn the Rogue Isles into an icy wasteland."}
    ],
    acquisition: "Defeat Lord Winter during the Winter event.",
    links: [
        {title: "Lord of Winter Badge", href: "https://paragonwiki.com/wiki/Lord_of_Winter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/lord-of-winter.png"}]
};
