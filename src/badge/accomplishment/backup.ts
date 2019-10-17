import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Backup: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "backup",
    setTitleId: 1967,
    names: [
        {type: Alternate.H, value: "Backup"},
        {type: Alternate.V, value: "Confederate"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You helped 10 teams complete a Weekly Strike Target even though you already received the bonus " +
        "for the week."}
    ],
    acquisition: "Complete 10 Weekly Strike Targets after you've already completed one for the week",
    links: [
        {title: "Backup Badge", href: "https://paragonwiki.com/wiki/Backup_Badge"},
        {title: "Confederate Badge", href: "https://paragonwiki.com/wiki/Confederate_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/backup.png"}
    ],
};