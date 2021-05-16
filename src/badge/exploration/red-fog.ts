import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheChantry} from "../../map/the-chantry";

export const RedFog: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "red-fog",
    setTitleId: 1819,
    names: [{value: "Red Fog"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheChantry.key,
    location: [-7523.0, 1893.0, 4177.0],
    badgeText: [{
        value: "You have been manipulated by this place." +
            " It has played you like a well-tuned instrument." +
            " It has fed you lies and thrown your shortcomings at your face." +
            " This place, by its very existence, mocks you and your attempts to understand it." +
            " Just as you think you've got a handle on this place it presents you with some new insanity to confound the senses." +
            " You feel anger growing like a cancer at the center of your being, a burning rage at every little indignity you've been made to suffer here." +
            " Each step you take is fueled by your anger; you will make the Shadow Shard and the things that call this place home pay for what they've done to you."
    }],
    notes: "Located in [map:the-chantry] 240 yards NW of the Path of Rage marker, just west of the geyser.",
    links: [
        {title: "Red Fog Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Red_Fog_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
