import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHollows} from "../../map/the-hollows";

export const Backwoodsman: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "backwoodsman",
    setTitleId: 195,
    names: [{value: "Backwoodsman"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHollows.key,
    location: [-2150.0, 42.0, 3332.0],
    badgeText: [{
        value: "These woods have cropped up at an alarming rate since the Hollowing." +
            " Many believe the dramatic growth rate of the trees is due to the area being saturated with mystical residue from the Circle's spells."
    }],
    notes: "Roughly 697 yards S-SE from the Eastgate Heights' marker.",
    links: [
        {title: "Backwoodsman Badge", href: "https://homecoming.wiki/wiki/Backwoodsman_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
