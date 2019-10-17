import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PositronsAlly: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "positrons-ally",
    setTitleId: 61,
    names: [
        {type: Alternate.H, value: "Positron's Ally"},
        {type: Alternate.V, value: "Positron's Betrayer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "Positron has awarded you this medal in recognition of services performed for him."},
        {type: Alternate.V, value: "Positron himself once awarded this medal to you. Nowadays he'd probably arrest you."}
    ],
    acquisition: "Complete both parts of the Positron Task Force: The Rule of Three",
    links: [
        {title: "Positron's Ally Badge", href: "https://paragonwiki.com/wiki/Positron%27s_Ally_Badge"},
        {title: "Positron's Betrayer Badge", href: "https://paragonwiki.com/wiki/Positron%27s_Betrayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/positrons-ally.png"}
    ],
};