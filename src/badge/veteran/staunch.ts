import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Staunch: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "staunch",
    setTitleId: 629,
    names: [
        {value: "Staunch"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `With eighteen Veteran levels to show for your service, you don't see yourself stopping anytime soon.`},
        {type: Alternate.V, value: `With eighteen Veteran levels to show for your villainy, one would think you'd have accumulated a decent retirement fund by now.`}
    ],
    acquisition: "Reach Veteran level 18",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-18.png"}]
};
