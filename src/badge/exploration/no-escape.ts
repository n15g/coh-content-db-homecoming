import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheAbyss} from "../../map/the-abyss";

export const NoEscape: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "no-escape",
    setTitleId: 1864,
    names: [{value: "No Escape"}],
    alignment: ALIGNMENT_ANY,
    mapKey: TheAbyss.key,
    location: [-291.0, -29.0, -687.0],
    badgeText: [{
        value: `You'd heard a recording of the last transmission sent from this location: a frantic helicopter pilot trying to get his whirlybird off the platform before the monsters closed in.
You could hear the terror in his voice and it made you smile. You know what that terror is like.
You've felt it and been the source of it for others. That last fifteen seconds as the pilot's scream mixes with the heli's collision alarm are audio gold.`
    }],
    notes: `Located in [map:${TheAbyss.key}], 515 yards northeast of the Grandville transfer point, in the center of the helipad which in turn is in roughly the center of the developed island.`,
    links: [
        {title: "No Escape Badge", href: "https://hcwiki.cityofheroes.dev/wiki/No_Escape_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
