import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Croatoa} from "../../map/croatoa";

export const MidnightersPerseverance: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "midnighters-perseverance",
    names: [{value: "Midnighter's Perseverance"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Croatoa.key,
    location: [-2070.0, 0.0, 470.0],
    badgeText: [{
        value: "This bridge is the site where Mayor Bower and Buck Salinger last met; Bower informed Salinger that his trek into Red Cap territory was a suicide mission." +
            " Salinger ignored the warning and continued forward, insisting that his skills as a Midnighter would prevail. So far, Salinger's luck - and survival skills - haven't failed him."
    }],
    notes: "The Midnighter's Perseverence Badge is in the middle of the bridge 60 yards south of Buck Salinger in Croatoa.",
    links: [
        {title: "Midnighter's Perseverance Badge", href: "https://paragonwiki.com/wiki/Midnighter%27s_Perseverance_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "8"
};
