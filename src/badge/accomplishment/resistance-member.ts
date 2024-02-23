import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ResistanceMember: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "resistance-member",
    setTitleId: 1754,
    names: [
        {value: "Resistance Member"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_resist.png"}],
    badgeText: [
        {
            value: "You have lent your support to the Praetorian Resistance to overthrow Emperor Cole, or at least " +
                "appeared to do so."
        }
    ],
    acquisition: "Choose a Resistance outcome in a moral choice mission",
    links: [
        {title: "Resistance Member Badge", href: "https://homecoming.wiki/wiki/Resistance_Member_Badge"}
    ]
};
