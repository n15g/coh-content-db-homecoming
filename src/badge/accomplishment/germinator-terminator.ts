import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GerminatorTerminator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "germinator-terminator",
    setTitleId: 2062,
    names: [
        {value: "Germinator Terminator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "The Praetorian Hamidon should know by now that sending one colonizing Seed isn't enough to " +
                "retake First Ward. You dread the day it does... You have taken down the Seed of Hamidon to " +
                "earn this badge."
        }
    ],
    acquisition: "Defeat The Seed of Hamidon in First Ward",
    links: [
        {title: "Germinator Terminator Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Germinator_Terminator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/germinator-terminator.png"}
    ],
};
