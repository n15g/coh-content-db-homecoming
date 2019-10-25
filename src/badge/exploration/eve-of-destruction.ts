import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheStormPalace} from "../../map/the-storm-palace";

export const EveOfDestruction: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "eve-of-destruction",
    setTitleId: 1860,
    names: [{value: "Eve of Destruction"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheStormPalace.key,
    location: [-2947.0, 2187.0, 270.0],
    badgeText: [{
        value: `Your destiny on the Shadow Shard is drawing very close.
Everything you have experienced so far has been building to this point.
You have suffered countless indignities, have had your body and mind abused and violated and the time of reckoning is here.
Rularuu is a being who consumes and destroys and now you shall show him that such talents are not his alone.`
    }],
    notes: `Located in [map:${TheStormPalace.key}] 78 yards west of the Lock of Destruction marker, in a small passage between rocks.`,
    links: [
        {title: "Eve of Destruction Badge", href: "https://paragonwiki.com/wiki/Eve_of_Destruction_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
