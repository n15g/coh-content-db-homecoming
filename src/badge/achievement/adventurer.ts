import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Adventurer: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "adventurer",
    setTitleId: 1581,
    setTitleIdPraetorian: 1666,
    names: [
        {value: "Adventurer"},
        {type: Alternate.P, value: "Doer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H,
            value: "You've explored your world and tackled dangerous obstacles that would fell lesser heroes." +
                " However, you get the distinct impression there is still much left to do."
        },
        {type: Alternate.V, value: "You've conquered, plotted against and crushed your enemies. However, none of this gives you total fulfillment, there's still so much left to be done."},
        {type: Alternate.P, value: "Your motto seems to be, \"If it was not meant to be done, it would not be there.\" So far all the universes you've been to tend to agree."}
    ],
    acquisition: "Earn 750 badges",
    links: [
        {title: "Adventurer Badge", href: "https://paragonwiki.com/wiki/Adventurer_Badge"},
        {title: "Doer Badge", href: "https://paragonwiki.com/wiki/Doer_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/adventurer-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/adventurer-v.png"}
    ],
};
