import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PenelopeYinsFriend: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "penelope-yins-friend",
    setTitleId: 2241,
    names: [
        {type: Alternate.H, value: "Penelope Yin's Friend"},
        {type: Alternate.V, value: "Penelope Yin's Betrayer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "Penelope Yin has expressed her gratitude by presenting you with this medal."},
        {type: Alternate.V, value: "Penelope Yin probably wishes she could erase the memory of having given you this medal."}
    ],
    acquisition: "Complete the Penelope Yin Task Force",
    links: [
        {title: "Penelope Yin's Friend Badge", href: "https://homecoming.wiki/wiki/Penelope_Yin%27s_Friend_Badge"},
        {title: "Penelope Yin's Betrayer Badge", href: "https://homecoming.wiki/wiki/Penelope_Yin%27s_Betrayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tf-3.png"}
    ],
};
