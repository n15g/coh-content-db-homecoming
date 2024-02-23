import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FaceTurn: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "face-turn",
    setTitleId: 2521,
    names: [
        {value: "Face Turn"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You witnessed what Bile swears is the truth, and navigated a recording of Piecemeal's final moments, marooned in Galaxy City amidst the beginning of a horrific invasion.`}
    ],
    acquisition: `Complete Piecemeal's personal story.`,
    links: [
        {title: "Face Turn Badge", href: "https://homecoming.wiki/wiki/Face_Turn_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/face-turn.png"}
    ],
};