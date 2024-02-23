import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AbandonedSewersTrial} from "../../map/abandoned-sewers-trial";

export const HeadOfTheHydra: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "head-of-the-hydra",
    setTitleId: 146,
    names: [{value: "Head of the Hydra"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AbandonedSewersTrial.key,
    location: [0.0, -695.0, 15.0],
    badgeText: [{
        value: `The Hydra threatens Paragon City from the bowels of the sewer system.`
    }],
    notes: `Located in the [map:${AbandonedSewersTrial.key}] under where the Hydra spawns.`,
    links: [
        {title: "Head of the Hydra Badge", href: "https://homecoming.wiki/wiki/Head_of_the_Hydra_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}]
};
