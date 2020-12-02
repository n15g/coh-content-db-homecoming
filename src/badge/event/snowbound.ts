import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Snowbound: IBadgeData = {
    type: BadgeType.EVENT,
    key: "snowbound",
    setTitleId: 2458,
    names: [
        {value: "Snowbound"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The snow outside made it very cozy inside during the annual Winter Event."},
    ],
    acquisition: "Login during the Winter event.",
    links: [
        {title: "Snowbound Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Snowbound_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/snowbound.png"}]
};
