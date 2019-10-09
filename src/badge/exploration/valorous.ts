import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {IndependencePort} from "../../map/independence-port";

export const Valorous: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "valorous",
    names: [{value: "Valorous"}],
    alignment: ALIGNMENT_HERO,
    mapKey: IndependencePort.key,
    location: [947.0, 609.0, -1152.0],
    badgeText: [{value: "The titanic hero Atlas fell at Valor Bridge, protecting the city from invasion."}],
    notes: "The Valorous Badge is located in Independence Port on top of the southernmost tower of the Valor Bridge, the westernmost and longest suspension bridge in the zone." +
        "\n\nIt is also 520 yards away from the Terra Volta entrance, lots of this distance includes going up.",
    links: [
        {title: "Valorous Badge", href: "https://paragonwiki.com/wiki/Valorous_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
