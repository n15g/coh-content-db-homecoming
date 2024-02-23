import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AlarmRaiser: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "alarm-raiser",
    setTitleId: 1976,
    names: [
        {value: "Alarm Raiser"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Whether by chutzpah or ignorance, you managed to assault the Behavioral Adjustment Facility " +
                "without ever disabling a single one of their guard towers."
        }
    ],
    acquisition: "Never disable a Guard Tower using the controls at its base during a Behavioral Adjustment Facility Incarnate Trial",
    links: [
        {title: "Alarm Raiser Badge", href: "https://homecoming.wiki/wiki/Alarm_Raiser_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-baf.png"}
    ],
};
