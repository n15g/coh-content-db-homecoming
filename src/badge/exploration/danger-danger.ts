import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TerraVolta} from "../../map/terra-volta";
import {IndependencePort} from "../../map/independence-port";

export const DangerDanger: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "danger-danger",
    setTitleId: 1838,
    names: [{value: "Danger! Danger!"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TerraVolta.key,
    location: [1215.0, 144.0, -6727.0],
    badgeText: [{
        value: `You stand at the border of one of the most dangerous places in all of Paragon City.
Before you lies a seething cauldron of anger, malice, and greed centered around the pumping heart of the city: the Terra Volta Nuclear Reactor.
Between the many villains who prowl the streets here there lies the danger of electrocution or radiation exposure, so tread carefully.`
    }],
    notes: `168 yards south of the [map:${IndependencePort.key}] gate, on the roof of the building.`,
    links: [
        {title: "Danger! Danger! Badge", href: "https://homecoming.wiki/wiki/Danger!_Danger!_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
