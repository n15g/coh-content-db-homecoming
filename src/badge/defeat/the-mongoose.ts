import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const TheMongoose: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "the-mongoose",
    setTitleId: 313,
    names: [
        {value: "The Mongoose"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You've become adept at taking down the Snakes."}
    ],
    acquisition: "Defeat 50 Snakes",
    links: [
        {title: "The Mongoose Badge", href: "https://homecoming.wiki/wiki/The_Mongoose_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/the-mongoose.png"}
    ],
};
