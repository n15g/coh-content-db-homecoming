import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";

export const FoundersHero: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "founders-hero",
    setTitleId: 1562,
    names: [
        {type: Alternate.H, value: "Founders' Hero"},
        {type: Alternate.V, value: "Founders' Loss"}
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: FoundersFalls.key,
    location: [1689.0, 9.0, 640.0],
    badgeText: [{
        value: "This area is where Michelle Harvey, a local magician, made her last stand against the Circle of Thorns, who were trying to attack the nearby hospital." +
            " Michelle used all of her life force to erect a protective barrier around the hospital." +
            " A group of heroes arrived to drive back the Circle, but it was too late for them to save Michelle." +
            " Because of this brave sacrifice, the hospital was renamed in her honor."
    }],
    notes: "Located 114 yards NNE of the hospital in [map:founders-falls], directly in front of Janet Kellum and Maxwell Christopher.",
    links: [
        {title: "Founders' Hero Badge", href: "https://paragonwiki.com/wiki/Founders%27_Hero_Badge"},
        {title: "Founders' Loss Badge", href: "https://paragonwiki.com/wiki/Founders%27_Loss_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "7"
};
