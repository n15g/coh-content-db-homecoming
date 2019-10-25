import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Encouraged: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "encouraged",
    setTitleId: 1010,
    names: [
        {value: "Encouraged"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `There's no denying you've got a name for yourself out there, and you're not about to have that fall into obscurity anytime soon. You have attained fifty-one Veteran levels.`}],
    acquisition: "Reach Veteran level 51",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-51.png"}]
};
