import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const CitadelsAssistant: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "citadels-assistant",
    setTitleId: 64,
    names: [
        {type: Alternate.H, value: "Citadel's Assistant"},
        {type: Alternate.V, value: "Citadel's Betrayer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H, value: "Citadel has awarded you this medal for helping him rid the world of the evil robots based on " +
                "his programming."
        },
        {
            type: Alternate.V, value: "Citadel now questions your true motives in assisting him, and fears (as much as an android " +
                "can) that you will find a way to use his technology for evil."
        }
    ],
    acquisition: "Complete the Citadel Task Force: Citadel's Children",
    links: [
        {title: "Citadel's Assistant Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Citadel%27s_Assistant_Badge"},
        {title: "Citadel's Betrayer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Citadel%27s_Betrayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/citadels-assistant.png"}
    ],
};
