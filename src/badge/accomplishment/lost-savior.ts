import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const LostSavior: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "lost-savior",
    setTitleId: 988,
    names: [
        {value: "Lost Savior"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "With the help of the Midnight Squad, Dawn Patrol and even a Rikti scientist, you've done the " +
                "impossible. You've found a cure for the Lost."
        }
    ],
    acquisition: "Complete the Cure Lost mission from Montague Castanella",
    links: [
        {title: "Lost Savior Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Lost_Savior_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/lost-savior.png"}
    ],
};
