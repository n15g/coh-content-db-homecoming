import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {Neutropolis} from "../../map/neutropolis";

export const MoarPower: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "moar-power",
    setTitleId: 1727,
    names: [{value: "Moar Power"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Neutropolis.key,
    location: [5760.0, 224.0, 2244.0],
    badgeText: [{
        value: "Praetor Keyes's anti-matter reactors are a boundless source of energy, once supplying all the power for the entire Eastern United States." +
            " It was their presence which led Emperor Cole to declare Praetoria City as the capital of the new world." +
            " Even at peak demand, barely one-third of the reactors' full power is needed."
    }],
    notes: "Located in [map:neutropolis] on the top platform of the westernmost reactor 112 yards NW of the Keyes Island marker.",
    links: [
        {title: "Moar Power Badge", href: "https://paragonwiki.com/wiki/Moar_Power_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "5"
};
