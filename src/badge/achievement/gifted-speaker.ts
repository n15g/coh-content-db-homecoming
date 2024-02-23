import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const GiftedSpeaker: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "gifted-speaker",
    setTitleId: 2095,
    names: [
        {value: "Gifted Speaker"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You know how to work a crowd when you need to. With the help of a psychic suggestion device, " +
                "of course."
        }
    ],
    acquisition: "Complete the story arc from Bane Spider Ruben",
    links: [
        {title: "Gifted Speaker Badge", href: "https://homecoming.wiki/wiki/Gifted_Speaker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/gifted-speaker.png"}
    ],
};
