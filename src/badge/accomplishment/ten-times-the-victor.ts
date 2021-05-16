import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TenTimesTheVictor: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "ten-times-the-victor",
    setTitleId: 422,
    names: [
        {value: "Ten Times the Victor"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You have impressed Mary Macomber, leader of the Cabal, by defeating her ten times. Though some " +
                "members of the Cabal may still fear you, others will work as your allies. As a reward, you can " +
                "now use a witch hat as a costume piece."
        }
    ],
    acquisition: "Defeat Mary MacComber ten times during the Katie Hannon Task Force",
    links: [
        {title: "Ten Times the Victor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ten_Times_the_Victor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ten-times-the-victor.png"}
    ],
};
