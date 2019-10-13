import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Eden} from "../../map/eden";
import {TheHive} from "../../map/the-hive";

export const NaturalSelection: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "natural-selection",
    names: [{value: "Natural Selection"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Eden.key,
    location: [3132.0, 153.0, 4527.0],
    badgeText: [{
        value: `It is difficult to remain unaffected by the display of Hamidon's might.
How could anyone not feel a sense of awe at the majesty present in the towering spires of rock, the primeval forest you can practically watch growing before your very eyes?
How anyone could not feel insignificant before it is a mystery.
But then you realize that this is merely another seduction perpetrated by Hamidon, to weaken your resolve and steal from you the urge to resist the Devouring Earth and the danger they represent.`
    }],
    notes: `Located in [map:${Eden.key}] 392 yards SSW of [map:${TheHive.key}] marker, at the base of a spire on a cliff in the southwest corner of the zone.`,
    links: [
        {title: "Natural Selection Badge", href: "https://paragonwiki.com/wiki/Natural_Selection_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
