import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHollows} from "../../map/the-hollows";

export const Parapsychologist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "parapsychologist",
    names: [{value: "Parapsychologist"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHollows.key,
    location: [-704.0, 379.0, 885.0],
    badgeText: [{
        value: "These hills are home to some of the Circle's most secret rites. Very few are allowed to leave after venturing here."
    }],
    notes: "Roughtly 293 yards NW of the Eastgate Heights' marker.",
    links: [
        {title: "Parapsychologist Badge", href: "https://paragonwiki.com/wiki/Parapsychologist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
