import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Partner: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "partner",
    setTitleId: 1968,
    names: [
        {type: Alternate.H, value: "Partner"},
        {type: Alternate.V, value: "Conspirator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You helped 50 teams complete a Weekly Strike Target even though you already received the bonus " +
                "for the week."
        }
    ],
    acquisition: "Complete 50 Weekly Strike Targets after you've already completed one for the week",
    links: [
        {title: "Partner Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Partner_Badge"},
        {title: "Conspirator Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Conspirator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/partner.png"}
    ],
};
