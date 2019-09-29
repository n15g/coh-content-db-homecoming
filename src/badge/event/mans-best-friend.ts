import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const MansBestFriend: IBadgeData = {
    type: BadgeType.EVENT,
    key: "mans-best-friend",
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
        {title: "Man's Best Friend Badge", href: "https://paragonwiki.com/wiki/Man%27s_Best_Friend_Badge"},
        {title: "Woman's Best Friend Badge", href: "https://paragonwiki.com/wiki/Woman%27s_Best_Friend_Badge"}
    ],
    imageKeys: [{value: "core.event.mans-best-friend"}]
};
