import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundImperial} from "../../map/underground-imperial";

export const UndergroundExplorer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "underground-explorer",
    setTitleId: 1652,
    names: [{value: "Underground Explorer"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundImperial.key,
    badgeText: [{
        value: "You have shown considerable bravery in plumbing the depths of Praetoria's underground warrens." +
            " The dangers here are many but only by exploring deeper will you truly learn all of its secrets. Get going, Underground Explorer!"
    }],
    notes: "The Underground Explorer Badge has three locations in [map:underground-imperial], all located just inside the Underground Access doors.\n" +
        "\n" +
        "Its coordinates are (-1778, 528, -768), (-1744, 528, -4691) and (-2544, 528, -4531). It is only necessary to visit one location to earn this badge.",
    links: [
        {title: "Underground Explorer Badge", href: "https://paragonwiki.com/wiki/Underground_Explorer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "8"
};
