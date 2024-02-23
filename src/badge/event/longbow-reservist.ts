import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const LongbowReservist: IBadgeData = {
    type: BadgeType.EVENT,
    key: "longbow-reservist",
    setTitleId: 520,
    names: [
        {type: Alternate.H, value: "Longbow Reservist"},
        {type: Alternate.V, value: "Jet-Setter"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have been made an honorary Longbow Eagle, temporarily issued a Longbow jetpack."},
        {type: Alternate.V, value: "You have received a Jetpack from an anonymous benefactor."}
    ],
    acquisition: "Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.",
    links: [
        {title: "Longbow Reservist Badge", href: "https://homecoming.wiki/wiki/Longbow_Reservist_Badge"},
        {title: "Jet-Setter Badge", href: "https://homecoming.wiki/wiki/Jet-Setter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/longbow-reservist.png"}]
};
