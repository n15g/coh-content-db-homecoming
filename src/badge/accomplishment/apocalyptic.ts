import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Apocalyptic: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "apocalyptic",
    names: [
        {value: "Apocalyptic"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated the Riktified Hero 1 and fought back the Rikti invasion for the time being."}
    ],
    acquisition: "Complete The Lady Grey Task Force",
    links: [
        {title: "Apocalyptic Badge", href: "https://paragonwiki.com/wiki/Apocalyptic_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/apocalyptic.png"}
    ],
};