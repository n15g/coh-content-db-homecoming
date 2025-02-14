import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const DownInFront: IBadgeData = {
    type: BadgeType.EVENT,
    key: "down-in-front",
    setTitleId: 2550,
    names: [
        {value: "Down In Front"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `The audience wasn't very amused when you proved yourself a nuisance during Manticore & Sister Psyche's wedding ceremony and had to be escorted off-stage.`},
    ],
    acquisition: `Stand in between Manticore and Sister Psyche during the ceremony until you are teleported away.`,
    links: [
        {title: "Down In Front", href: "https://homecoming.wiki/wiki/Down_In_Front_Badge"},
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/down-in-front.png"}]
};
