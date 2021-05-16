import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ManticoresAssociate: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "manticores-associate",
    setTitleId: 65,
    names: [
        {type: Alternate.H, value: "Manticore's Associate"},
        {type: Alternate.V, value: "Manticore's Betrayer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H, value: "Manticore was proud to present you with this medal, in recognition of the valor and honor you " +
                "showed while helping him."
        },
        {type: Alternate.V, value: "Manticore, always the paranoid one, now thinks you let Countess Crey escape on purpose..."}
    ],
    acquisition: "Complete the Manticore Task Force: Following Countess Crey",
    links: [
        {title: "Manticore's Associate Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Manticore%27s_Associate_Badge"},
        {title: "Manticore's Betrayer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Manticore%27s_Betrayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/manticores-associate.png"}
    ],
};
