import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHive} from "../../map/the-hive";

export const TimeBandit: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "time-bandit",
    setTitleId: 142,
    names: [{value: "Time Bandit"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHive.key,
    location: [1742.0, 2.0, -3820.0],
    badgeText: [{
        value: `Portal Corporation had their main facility here until the Devouring Earth destroyed the area.
This forced them to move their headquarters to Peregrine Island.`
    }],
    notes: `Located in [map:${TheHive.key}] in the middle of the road leading north into the abandoned structures, just before it breaks up into the grassy area.`,
    links: [
        {title: "Time Bandit Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Time_Bandit_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
