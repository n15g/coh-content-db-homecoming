import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const Politician: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "politician",
    setTitleId: 260,
    names: [{value: "Politician"}],
    alignment: ALIGNMENT_ANY,
    mapKey: SirensCall.key,
    location: [664.0, 0.0, 960.5],
    badgeText: [{value: "Council man John Chard announced from this location that his island would be the front lines of defense against the Rikti invasion."}],
    notes: "The Politician Badge is located in the [map:${SirensCall.key}] zone to the right (north) of the doorway of the building immediately east of the hero base.",
    links: [{title: "Politician Badge", href: "https://homecoming.wiki/wiki/Politician_Badge"}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "2"
};
