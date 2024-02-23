import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const MansBestFriend: IBadgeData = {
    type: BadgeType.EVENT,
    key: "mans-best-friend",
    setTitleId: 2244,
    names: [
        {type: Alternate.M, value: "Man's Best Friend"},
        {type: Alternate.F, value: "Woman's Best Friend"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You defeated Frank 'Hunnerd Yard' McCain within 10 seconds of defeating his dog, Killer."},
    ],
    acquisition: "In the Summer Blockbuster, defeat Frank 'Hunnerd Yard' McCain within 10 seconds of defeating his dog, Killer.",
    notes: "Snaptooth can be found in the following missions:" +
        "\n\n1. **Find Snaptooth and take him out** from DJ Zero during the Valentine's Day Event" +
        "\n2. **Rescue Baby New Year from Snaptooth!** from Father Time during the Winter Events.",
    links: [
        {title: "Man's Best Friend Badge", href: "https://homecoming.wiki/wiki/Man%27s_Best_Friend_Badge"},
        {title: "Woman's Best Friend Badge", href: "https://homecoming.wiki/wiki/Woman%27s_Best_Friend_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/mans-best-friend.png"}]
};
