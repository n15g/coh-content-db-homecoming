import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const SavedTheWorld: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "saved-the-world",
    setTitleId: 733,
    names: [
        {type: Alternate.H, value: "Saved the World"},
        {type: Alternate.V, value: "Saved the World... for Later"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H, value: "After defeating Lord Recluse's plan to steal the powers of all the heroes on the planet, you " +
                "have been recognized as a true world-savior."
        },
        {
            type: Alternate.V, value: "Defeating Lord Recluse's plan to steal the powers of all the heroes on the planet was " +
                "necessary at the time. After all, it wasn't YOU at the helm."
        }
    ],
    acquisition: "Complete the Ms. Liberty Task Force",
    links: [
        {title: "Saved the World Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Saved_the_World_Badge"},
        {title: "Saved the World... For Later Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Saved_the_World..._For_Later_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/defeatrecluse.png"}
    ],
};
