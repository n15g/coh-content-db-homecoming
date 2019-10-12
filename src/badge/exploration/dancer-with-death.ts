import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FirebaseZulu} from "../../map/firebase-zulu";

export const DancerWithDeath: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dancer-with-death",
    names: [{value: "Dancer with Death"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FirebaseZulu.key,
    location: [-2856.0, 1651.0, -3551.0],
    badgeText: [{
        value: "Point Tango has come under repeated assaults that have wrought more devastation than any of the other military installations in the Shadow Shard." +
            " The damage of these constant attacks is evident in the shattered concrete structures, the warped metal supports, and on the faces of the soldiers manning Point Tango." +
            " Despite the danger of their post, they are unflinching in their defense of the installation." +
            " In the spirit of the name of their base, Point Tango, they've coined the phrase \"Dance with Death\" for whenever the denizens of the Shadow Shard launch another attack" +
            " against their position. They welcome you to dance with them, and survive as they have... if you can."
    }],
    notes: "Located in [map:firebase-zulu] 83 yards NE of Point Tango, at the base of the lookout tower.",
    links: [
        {title: "Dancer with Death Badge", href: "https://paragonwiki.com/wiki/Dancer_with_Death_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
