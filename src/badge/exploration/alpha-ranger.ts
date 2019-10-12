import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FirebaseZulu} from "../../map/firebase-zulu";

export const AlphaRanger: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "alpha-ranger",
    names: [{value: "Alpha Ranger"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FirebaseZulu.key,
    location: [2338.0, 890.0, 2774.0],
    badgeText: [{
        value: "The soldiers of Point Alpha man one of the most embattled posts in the Shadow Shard." +
            " They deal with skirmishes on an hourly basis and the attrition rate is very high." +
            " Coming here is viewed as both a blessing; the men cheer any powered assistance they can get against an enemy they can barely comprehend; and a curse, for your presence indicates" +
            " the danger they are in and the inadequacy of their modern weapons against this threat. But being here has made you an honorary Alpha Ranger."
    }],
    notes: "Located in [map:firebase-zulu] 140 yards SE of the Point Alpha marker, just East of the truck parked inside the base.",
    links: [
        {title: "Alpha Ranger Badge", href: "https://paragonwiki.com/wiki/Alpha Ranger_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
