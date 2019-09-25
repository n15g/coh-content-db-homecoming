import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";

export const Summoned: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "summoned",
    names: [{value: "Summoned"}],
    alignment: ALIGNMENT_HERO,
    mapKey: KingsRow.key,
    location: [-496.0, 101.0, 768.0],
    badgeText: [{
        value: "Statesman broke up a ritual by the Circle of Thorn members that would have bolstered their ranks exponentially."
    }],
    notes: "The Summoned Badge is located near the southern border of Kings Row, southeastern to the hospital 343 yards." +
        "\n\nIt is in the middle of the Industrial Avenue neighborhood, next to a broken pipe in the ground that leaks steam." +
        " It is approximately 182 yards east of the Industrial Avenue neighborhood marker.",
    links: [
        {title: "Summoned Badge", href: "https://paragonwiki.com/wiki/Summoned_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "1"
};
