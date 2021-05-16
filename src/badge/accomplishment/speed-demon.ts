import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SpeedDemon: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "speed-demon",
    setTitleId: 963,
    names: [
        {value: "Speed Demon"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Wow! What speed! That was amazing!"}
    ],
    acquisition: "Complete a ski run on the Expert slope in under 25 seconds during a Winter Event",
    links: [
        {title: "Speed Demon Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Speed_Demon_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ski-gold.png"}
    ],
};
