import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const NutrientRich: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "nutrient-rich",
    setTitleId: 2541,
    names: [
        {value: "Nutrient-Rich"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Despite missing or ignoring the hazardous material warning, Blarf is now fed, although probably not in the way you anticipated... "}
    ],
    acquisition: "Earn the Nutrient-Rich Accomplishment badge by clicking on Blarf until it defeats you.",
    links: [
        {title: "Nutrient-Rich Badge", href: "https://homecoming.wiki/wiki/Nutrient-Rich_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/nutrient-rich.png"}
    ],
};
