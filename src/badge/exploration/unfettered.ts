import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheChantry} from "../../map/the-chantry";

export const Unfettered: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "unfettered",
    names: [{value: "Unfettered"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheChantry.key,
    location: [1112.0, 270.0, -3857.0],
    badgeText: [{
        value: "You have burdened yourself with so many unnecessary attachments." +
            " Your friends will only disappoint you; they are best cast aside." +
            " You will ultimately disappoint those you love; better to walk alone and be responsible only to yourself." +
            " This identity you've constructed is just an illusion to hide who you really are; not to everyone else, they are less than nothing, but to yourself." +
            " Your possessions, your job, your status: it is time for you to deny the hold they have on you and walk free and unfettered."
    }],
    notes: "Located in [map:the-chantry] 0.50 miles SSW of the Bastion of Denial marker, east of the geyser on the floating island.",
    links: [
        {title: "Unfettered Badge", href: "https://paragonwiki.com/wiki/Unfettered_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
