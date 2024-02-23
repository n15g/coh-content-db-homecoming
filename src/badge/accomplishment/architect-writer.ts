import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArchitectWriter: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "architect-writer",
    setTitleId: 2194,
    names: [
        {value: "Architect Writer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You played through Heather Townshend's personal story, witnessing the event where she joined " +
                "the Letter Writer's team."
        }
    ],
    acquisition: "Complete the personal story mission from Heather Townshend",
    links: [
        {title: "Architect Writer Badge", href: "https://homecoming.wiki/wiki/Architect_Writer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png"}
    ],
};
