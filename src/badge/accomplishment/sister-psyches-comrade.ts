import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const SisterPsychesComrade: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "sister-psyches-comrade",
    setTitleId: 63,
    names: [
        {type: Alternate.H, value: "Sister Psyche's Comrade"},
        {type: Alternate.V, value: "Sister Psyche's Betrayer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "Sister Psyche has expressed her gratitude by presenting you with this medal."},
        {type: Alternate.V, value: "Sister Psyche probably wishes she could erase the memory of having given you this medal."}
    ],
    acquisition: "Complete the Sister Psyche Task Force: Clamor and Destruction in Flashback",
    links: [
        {title: "Sister Psyche's Comrade Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sister_Psyche%27s_Comrade_Badge"},
        {title: "Sister Psyche's Betrayer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sister_Psyche%27s_Betrayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tf-3.png"}
    ],
};
