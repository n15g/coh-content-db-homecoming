import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const StrongPretty: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "strong-pretty",
    setTitleId: 1978,
    names: [
        {value: "Strong & Pretty"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Siege and Nightstar are the real threat at the Behavioral Adjustment Facility, but you added " +
                "insult to injury by depriving them of all their War Works allies prior to administering the " +
                "final simultaneous blow."
        }
    ],
    acquisition: "Defeat Siege & Nightstar while none of their reinforcements are alive during a Behavioral Adjustment Facility Incarnate Trial",
    links: [
        {title: "Strong & Pretty Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Strong_%26_Pretty_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-baf.png"}
    ],
};
