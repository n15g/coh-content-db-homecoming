import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const JustifiedEnds: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "justified-ends",
    setTitleId: 2562,
    names: [
        {value: "Justified Ends"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `Some evils can't be beaten while keeping your hands clean. You've done what was needed when others wouldn't.`}],
    acquisition: `Complete Robert Kogan's story arc TheSunlight and the Spotlight.`,
    links: [
        {title: 'Justified Ends Badge', href: 'https://homecoming.wiki/wiki/Justified_Ends_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/justified-ends.png'}
    ],
};
