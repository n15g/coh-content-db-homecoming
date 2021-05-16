import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BoundForGlory: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "bound-for-glory",
    setTitleId: 2195,
    names: [
        {value: "Bound for Glory"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You played through Mu'Vorkan's personal story, witnessing the event where his quest to become " +
                "a patron of Arachnos began."
        }
    ],
    acquisition: "Complete the personal story mission from Mu'Vorkan",
    links: [
        {title: "Bound for Glory Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bound_for_Glory_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png"}
    ],
};
