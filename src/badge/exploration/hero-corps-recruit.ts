import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const HeroCorpsRecruit: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hero-corps-recruit",
    names: [{value: "Hero Corps Recruit"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-1764.0, 16.0, 1364.0],
    badgeText: [{
        value: "Hero Corps is not only a Corps of people, but also a Corporation, selling their super-powered services to those willing to foot the bill."
    }],
    notes: "The Hero Corps Recruit Badge is in the Steel Canyon Medical Center neighborhood." +
        "\n\nIt is located just outside and to the right of the door to the hospital, at the southeastern corner of the building.",
    links: [
        {title: "Hero Corps Recruit Badge", href: "https://paragonwiki.com/wiki/Hero_Corps_Recruit_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "2"
};
