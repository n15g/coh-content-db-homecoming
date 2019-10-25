import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheStormPalace} from "../../map/the-storm-palace";

export const MaliceAforethought: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "malice-aforethought",
    setTitleId: 1856,
    names: [{value: "Malice Aforethought"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheStormPalace.key,
    location: [-4971.0, 453.0, 7458.0],
    badgeText: [{
        value: `Everything about the Shadow Shard expresses the danger it represents to your home dimension.
This is not some mere foreign power that can be reasoned with or with whom a peaceful settlement can be negotiated.
Its very existence is built upon a hostility towards anything other than itself; malice is ingrained into every particle of its being.
But are you not just projecting your own human-born ideas of good and evil upon it?
Is the wolf acting with malice when it devours the hare? Is it evil for the strong to dominate the weak?`
    }],
    notes: `Located in [map:${TheStormPalace.key}] 36 feet west of the Lock of Malice marker.`,
    links: [
        {title: "Malice Aforethought Badge", href: "https://paragonwiki.com/wiki/Malice_Aforethought_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
