import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheChantry} from "../../map/the-chantry";

export const Penitent: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "penitent",
    names: [{value: "Penitent"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheChantry.key,
    location: [-5972.0, 1047.0, -3376.0],
    badgeText: [{
        value: "It is all your fault. The lives you've ruined along your path to glory." +
            " That Hellion who was forced into a life of crime when all other options were spent." +
            " That lonely member of the Lost who'd been spat on all his life until he finally found people who accepted him for who he was." +
            " That Sky Raider whose daughter depended on him to pay for her dialysis." +
            " Did you ever give a thought to the people you've been \"defeating\" in your quest to become a \"true hero?\"" +
            " No, of course not, they're just points to be earned on some metaphorical scorecard."
    }],
    notes: "Located in [map:the-chantry] 421 yards east of the Bastion of Guilt marker, on the northern edge of the island.",
    links: [
        {title: "Penitent Badge", href: "https://paragonwiki.com/wiki/Penitent_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
