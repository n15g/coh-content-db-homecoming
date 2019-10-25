import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FirebaseZulu} from "../../map/firebase-zulu";

export const XRaySpectator: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "x-ray-spectator",
    setTitleId: 1802,
    names: [{value: "X-Ray Spectator"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FirebaseZulu.key,
    location: [-3222.0, 1289.0, 111.0],
    badgeText: [{
        value: "The soldiers of Point X-Ray like to call themselves the \"X-Raiders.\"" +
            " They are an elite squad specializing in sniper rifles and counter-insurgency and though they find themselves in a completely unfamiliar environment they still employ their military" +
            " discipline and peerless training to the effort. They don't generally welcome super-powered individuals but seeing as you've come as far, you've clearly proven yourself" +
            " against the \"hostiles\" and so they offer you a grudging respect." +
            " Though they are not ready to give you the title of fellow X-Raider... yet."
    }],
    notes: "Located in [map:firebase-zulu] 208 yards NW of the Point X-Ray marker, on top of the base's outer wall.",
    links: [
        {title: "X-Ray Spectator Badge", href: "https://paragonwiki.com/wiki/X-Ray_Spectator_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
