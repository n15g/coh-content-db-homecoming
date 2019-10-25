import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Honorable: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "honorable",
    setTitleId: 1277,
    names: [
        {value: "Honorable"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You're revered by the people of Paragon City and are considered 'Honorable' for your many good deeds. You have attained sixty-three Veteran levels.`},
        {type: Alternate.V, value: `The people of the Rogue Isles know to refer to you as 'Honorable'... or else. You have attained sixty-three Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 63",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-63.png"}]
};
