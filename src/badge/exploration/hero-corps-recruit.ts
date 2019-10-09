import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const HeroCorpsRecruit: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hero-corps-recruit",
    names: [
        {type: Alternate.H, value: "Hero Corps Recruit"},
        {type: Alternate.V, value: "Hero Corps Reject"},
        ],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-1764.0, 16.0, 1364.0],
    badgeText: [{
        value: "Hero Corps is not only a Corps of people, but also a Corporation, selling their super-powered services to those willing to foot the bill."
    }],
    notes: "The Hero Corps Recruit Badge is in the Steel Canyon Medical Center neighborhood." +
        "\n\nIt is located just outside and to the right of the door to the hospital, at the southeastern corner of the building.",
    links: [
        {title: "Hero Corps Recruit Badge", href: "https://paragonwiki.com/wiki/Hero_Corps_Recruit_Badge"},
        {title: "Hero Corps Reject Badge", href: "https://paragonwiki.com/wiki/Hero_Corps_Reject_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
