import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CouldntCareLess: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "couldnt-care-less",
    setTitleId: 2383,
    names: [
        {value: "Couldn't Care Less"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `No matter how amazing, stunning or incredible your actions, nothing seems to inspire you.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-insp.png"}],
    acquisition: "Reject 1000 inspiration drops.",
    links: [
        {title: "Couldn't Care Less Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Couldn%27t_Care_Less_Badge"}
    ],
};
