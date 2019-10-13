import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Ouroboros} from "../../map/ouroboros";

export const Chrononaut: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "chrononaut",
    names: [{value: "Chrononaut"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Ouroboros.key,
    location: [543.0, 868.0, -768.0],
    badgeText: [{
        value: "Welcome to Ouroboros. You have a feeling as if there is a lot of work that needs to be done."
    }],
    notes: "The Chrononaut Badge is located at the very top of the building structure in Ouroboros.",
    links: [
        {title: "Chrononaut Badge", href: "https://paragonwiki.com/wiki/Chrononaut_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"},
    ],
    vidiotMapKey: "1"
};
