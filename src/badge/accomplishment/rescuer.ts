import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Rescuer: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "rescuer",
    setTitleId: 696,
    names: [
        {type: Alternate.H, value: "Rescuer"},
        {type: Alternate.V, value: "Big Softie"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You saved Penelope Yin's father from the Lost, and now a thankful Mr. Yin has re-opened Yin's Market in Faultline. You can now shop there whenever you want."},
        {type: Alternate.V, value: "Having saved Penelope Yin brings you no end of scorn from other villains. Before you smash them into oblivion, they call you a Big Softie."}
    ],
    acquisition: "The Rescuer accomplishment badge can be earned by completing the Rescue Mr. Yin mission from Penelope Yin.",
    notes: "All team members get the badge.",
    links: [
        {title: "Rescuer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Rescuer_Badge"},
        {title: "Big Softie Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Big_Softie_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/rescuer.png"}]
};
