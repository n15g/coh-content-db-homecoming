import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ThickerThanWater: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "thicker-than-water",
    setTitleId: 2563,
    names: [
        {value: "Thicker Than Water"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `Alexander 'the Great' Pavlidis used the full quote: 'The blood of the battlefield is thicker than the water of the womb.' His former brothers in arms among the Warriors have fallen victim to demonic trickery but he remains honorbound to try to save their souls.`}],
    acquisition: `Complete Alexander the Great's story arc Know Thy Enemy.`,
    links: [
        {title: 'Thicker Than Water Badge', href: 'https://homecoming.wiki/wiki/Thicker_Than_Water_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/thicker-than-water.png'}
    ],
};
