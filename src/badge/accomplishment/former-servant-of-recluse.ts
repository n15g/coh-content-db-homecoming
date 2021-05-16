import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const FormerServantOfRecluse: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "former-servant-of-recluse",
    setTitleId: 323,
    names: [
        {type: Alternate.H, value: "Former Servant of Recluse"},
        {type: Alternate.V, value: "Servant of Recluse"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "You have broken Paragon City's 'best,' and now must atone for those actions."},
        {type: Alternate.V, value: "You have broken Paragon City's 'best.' Let everyone fear you!"}
    ],
    acquisition: "Complete the Lord Recluse Strike Force: Future of Freedom",
    links: [
        {title: "Former Servant of Recluse Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Former_Servant_of_Recluse_Badge"},
        {title: "Servant of Recluse Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Servant_of_Recluse_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/former-servant-of-recluse.png"}
    ],
};
