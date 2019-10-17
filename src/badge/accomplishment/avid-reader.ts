import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AvidReader: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "avid-reader",
    setTitleId: 1716,
    names: [
        {value: "Avid Reader"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You take the time to listen to what everyone has to say very carefully, and read everything " +
        "you run across. As a reward for this remarkable trait, you have more than earned this badge."}
    ],
    acquisition: "Read Prometheus' dialogue regarding the Well of the Furies  Requires Going Rogue.",
    links: [
        {title: "Avid Reader Badge", href: "https://paragonwiki.com/wiki/Avid_Reader_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/avid-reader.png"}
    ],
};