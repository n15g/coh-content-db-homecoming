import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TerraVolta} from "../../map/terra-volta";

export const Meltdown: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "meltdown",
    setTitleId: 132,
    names: [{value: "Meltdown"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TerraVolta.key,
    location: [1120.0, 721.0, -3080.0],
    badgeText: [{
        value: `Covert Rikti strike teams have attempted to destroy the Terra Volta reactor on more than one occasion.`
    }],
    notes: `Located on top of the main reactor, on the northeast sector of the dome just before the dropoff.`,
    links: [
        {title: "Meltdown Badge", href: "https://homecoming.wiki/wiki/Meltdown_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
