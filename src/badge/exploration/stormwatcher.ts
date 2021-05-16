import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FirebaseZulu} from "../../map/firebase-zulu";

export const Stormwatcher: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "stormwatcher",
    setTitleId: 1799,
    names: [{value: "Stormwatcher"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FirebaseZulu.key,
    location: [4872.0, 865.0, 992.0],
    badgeText: [{
        value: "It was here that Earth's explorers first encountered the mysterious entities of the Shadow Shard." +
            " Their threat was implicit and the need to keep them contained became a driving force in the establishment of Tempest Sector." +
            " As a representative of Paragon City, you have joined the fight to prevent the denizens of the Shadow Shard from extending their range into your home dimension." +
            " Some see their discovery of Primal Earth's dimension as inevitable; a \"coming storm\" which could rival the Rikti Invasion in destructive potential."
    }],
    notes: "Located in [map:firebase-zulu] 133 yards SW of the Tempest Sector marker, at the base of the ramp leading into the base.",
    links: [
        {title: "Stormwatcher Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Stormwatcher_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
