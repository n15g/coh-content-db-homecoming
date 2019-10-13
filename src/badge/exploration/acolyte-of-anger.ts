import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheStormPalace} from "../../map/the-storm-palace";

export const AcolyteOfAnger: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "acolyte-of-anger",
    names: [{value: "Acolyte of Anger"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheStormPalace.key,
    location: [-2133.0, -27.0, 8644.0],
    badgeText: [{
        value: `The Shadow Shard hates you. You can feel its anger pulsing in the air around you and the very ground you stand upon, throbbing up through your feet.
The wind is a roar of anger at your very presence, echoed by the Shadow Shard's twisted inhabitants.
You steel yourself against this emotional onslaught, unbowed by this world's hostility.
You will turn its hate and anger back upon itself; you will be an Acolyte of Anger who wields rage as a weapon against it.`
    }],
    notes: `Located in [map:${TheStormPalace.key}] at the Lock of Anger marker.`,
    links: [
        {title: "Acolyte of Anger Badge", href: "https://paragonwiki.com/wiki/Acolyte_of_Anger_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
