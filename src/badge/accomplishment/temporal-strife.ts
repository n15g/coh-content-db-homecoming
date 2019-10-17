import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TemporalStrife: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "temporal-strife",
    setTitleId: 993,
    names: [
        {value: "Temporal Strife"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You are one of the few who has travelled back in time to face the 5th Column as they attempted " +
        "to build a temporal stronghold in the ancient lands of Cimerora."}
    ],
    acquisition: "Complete the Imperious Task Force: Time's Arrow",
    links: [
        {title: "Temporal Strife Badge", href: "https://paragonwiki.com/wiki/Temporal_Strife_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/temporal-strife.png"}
    ],
};