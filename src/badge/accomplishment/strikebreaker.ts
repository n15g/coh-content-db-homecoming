import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Strikebreaker: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "strikebreaker",
    names: [
        {value: "Strikebreaker"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The Scrapyarders of Sharkhead Isle have been put back to work thanks to you."}
    ],
    acquisition: "Complete the Bust the Dockworkers Strike mission from Lorenz Ansaldo",
    links: [
        {title: "Strikebreaker Badge", href: "https://paragonwiki.com/wiki/Strikebreaker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-4.png"}
    ],
};