import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheChantry} from "../../map/the-chantry";

export const Misbegotten: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "misbegotten",
    names: [{value: "Misbegotten"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheChantry.key,
    location: [-5161.0, 929.0, 1530.0],
    badgeText: [{
        value: "You're no hero. You're a thug. A super-powered bully who metes out pain and suffering in equal measure." +
            " What kind of person are you, who finds inspiration in the broken bodies and shattered lives you've left in your wake?" +
            " What kind of person has their life enhanced every time some \"villain\" crumples in a lifeless heap at your feet? Does it make you feel powerful?" +
            " You're a leech, sucking the life from everyone who stands between you and your \"noble goals\" for a \"better, safer society.\" Have you no shame?"
    }],
    notes: "Located in [map:the-chantry] 250 yards ENE of the Bastion of Shame marker, on the NE edge of the island.",
    links: [
        {title: "Misbegotten Badge", href: "https://paragonwiki.com/wiki/Misbegotten_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
