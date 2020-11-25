import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHollows} from "../../map/the-hollows";

export const GanglandFury: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "gangland-fury",
    setTitleId: 199,
    names: [{value: "Gangland Fury"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHollows.key,
    location: [-728.0, -11.0, -3518.0],
    badgeText: [{
        value: "Since the Hollowing, these streets have turned into a war zone between the Trolls and the Outcasts." +
            " Only the constant vigilance of heroes keeps this conflict from turning into a bloodbath."
    }],
    notes: "187 yards South of Four Seasons marker.",
    links: [
        {title: "Gangland Fury Badge", href: "https://paragonwiki.com/wiki/Gangland Fury_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
