import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TrickedOut: IBadgeData = {
    type: BadgeType.EVENT,
    key: "tricked-out",
    setTitleId: 2086,
    names: [
        {value: "Tricked Out"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You took out the Abomination wearing nothing but a festive Halloween costume!"},
    ],
    acquisition: "Complete Dr. Kane's House of Horror in a Halloween costume during the Halloween event.",
    links: [
        {title: "Tricked Out Badge", href: "https://paragonwiki.com/wiki/Tricked_Out_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/tricked-out.png"}]
};
