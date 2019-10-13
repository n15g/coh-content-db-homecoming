import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FirebaseZulu} from "../../map/firebase-zulu";

export const ShadowArchitect: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "shadow-architect",
    names: [{value: "Shadow Architect"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FirebaseZulu.key,
    location: [513.0, 1742.0, -2084.0],
    badgeText: [{
        value: "Humanity is a creature who builds. It finds virgin territory and makes its mark." +
            " The Shadow Shard is no different." +
            " Even in the short time since it was discovered, a flood of construction material made its way through the dimensional membrane into the Shadow Shard and the building began." +
            " The crews met the unearthly challenges that faced them and established numerous military facilities in this strange territory." +
            " There is something almost surreal about seeing this construction crane, something so commonplace on Earth here in an alien dimension: the mundane meeting the unearthly."
    }],
    notes: "Located in [map:firebase-zulu] 181 yards NNW of the Point Foxtrot marker, on top of the west end of the arm on top of the crane.",
    links: [
        {title: "Shadow Architect Badge", href: "https://paragonwiki.com/wiki/Shadow Architect_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
