import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const FrontPerson: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "front-person",
    setTitleId: 2561,
    names: [
        {value: "Front Person"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{value: `When Crey needed someone to give them a good face to recover their image, they called you.`}],
    acquisition: `Complete Erin West's story arc Cutting Back Old Growth.`,
    links: [
        {title: 'Front Person Badge', href: 'https://homecoming.wiki/wiki/Front_Person_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/front-person.png'}
    ],
};
