import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Loyalist: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "loyalist",
    setTitleId: 1755,
    names: [
        {value: "Loyalist"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png"}],
    badgeText: [
        {value: "You spent some effort bolstering the Praetorian regime of Emperor Cole, or at least appearing " +
        "to do so."}
    ],
    acquisition: "Choose a Loyalist outcome in a moral choice mission",
    links: [
        {title: "Loyalist Badge", href: "https://paragonwiki.com/wiki/Loyalist_Badge"}
    ]
};
