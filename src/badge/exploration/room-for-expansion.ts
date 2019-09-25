import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SkywayCity} from "../../map/skyway-city";

export const RoomForExpansion: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "room-for-expansion",
    names: [{value: "Room for Expansion"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SkywayCity.key,
    location: [687.0, 0.0, -141.0],
    badgeText: [{
        value: "With Faultline gaining traffic, many people are calling for more apartments to be built in this area and for Longbow to move their Bloody Bay heli-pad to another location." +
            " Longbow refuses however, stating this is the safest place for them to be, and that they are also keeping the Lost of the area in check."
    }],
    notes: "The Room for Expansion Badge is at the entrance of the parking lot between the Faultline and Bloody Bay zone connections in Skyway City.",
    links: [
        {title: "Room for Expansion Badge", href: "https://paragonwiki.com/wiki/Room_for_Expansion_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "6"
};
