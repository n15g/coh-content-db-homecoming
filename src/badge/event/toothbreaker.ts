import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Toothbreaker: IBadgeData = {
    type: BadgeType.EVENT,
    key: "toothbreaker",
    setTitleId: 528,
    names: [
        {value: "Toothbreaker"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated Snaptooth 5 times, and are truly a Toothbreaker."},
    ],
    acquisition: "Defeat Snaptooth 5 times.",
    notes: "Snaptooth can be found in the following missions:" +
        "\n\n1. **Find Snaptooth and take him out** from DJ Zero during the Valentine's Day Event" +
        "\n2. **Rescue Baby New Year from Snaptooth!** from Father Time during the Winter Events.",
    links: [
        {title: "Toothbreaker Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Toothbreaker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/toothbreaker.png"}]
};
