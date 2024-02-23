import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const CrystalKeeper: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "crystal-keeper",
    setTitleId: 515,
    names: [
        {value: "Crystal Keeper"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You have destroyed the psychic control network the Circle grew from shards of Serafina's " +
                "crystal, and recovered the crystal itself."
        }
    ],
    acquisition: "Complete the Ice Mistral Strike Force: The Crystal of Serafina",
    links: [
        {title: "Crystal Keeper Badge", href: "https://homecoming.wiki/wiki/Crystal_Keeper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/crystal-keeper.png"}
    ],
};
