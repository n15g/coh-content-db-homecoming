import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BehaviorAdjuster: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "behavior-adjuster",
    setTitleId: 1974,
    names: [
        {value: "Behavior Adjuster"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Incarnate Trial: Behavioral Adjustment Facility."}
    ],
    acquisition: "Complete the Behavioral Adjustment Facility Incarnate Trial",
    links: [
        {title: "Behavior Adjuster Badge", href: "https://paragonwiki.com/wiki/Behavior_Adjuster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/behavior-adjuster.png"}
    ],
};