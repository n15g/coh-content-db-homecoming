import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const Politician: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "politician",
    setTitleId: 260,
    names: [{value: "Politician"}],
    alignment: ALIGNMENT_ANY,
    mapKey: SirensCall.key,
    location: [961.0, 0.0, -665.0],
    badgeText: [{value: "Council man John Chard announced from this location that his island would be the front lines of defense against the Rikti invasion."}],
    notes: "The Politician Badge is located in the Siren's Call zone to the right (east) of the doorway of the building immediately south of the hero base.",
    links: [{title: "Politician Badge", href: "https://paragonwiki.com/wiki/Politician_Badge"}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "2"
};
