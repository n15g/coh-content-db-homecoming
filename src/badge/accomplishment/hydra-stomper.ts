import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HydraStomper: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "hydra-stomper",
    setTitleId: 2021,
    names: [
        {value: "Hydra Stomper"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You went into the depths of the sewers beneath Paragon City and took down two monstrous Hydra " +
        "heads!"}
    ],
    acquisition: "Complete the Death from Below Sewer Trial",
    links: [
        {title: "Hydra Stomper Badge", href: "https://paragonwiki.com/wiki/Hydra_Stomper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/hydra-stomper.png"}
    ],
};