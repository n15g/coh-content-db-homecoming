import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {IndependencePort} from "../../map/independence-port";

export const Unlucky: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "unlucky",
    setTitleId: 1556,
    names: [{value: "Unlucky"}],
    alignment: ALIGNMENT_HERO,
    mapKey: IndependencePort.key,
    location: [2044.0, 0.0, -9663.0],
    badgeText: [{
        value: "Every member of Freedom Corps who works in this base is considered unlucky." +
            " The base is out-of-the-way from everything in Paragon City and has a long daily commute." +
            " Arachnos occasionally tries to spy on this base, but even they can't be bothered to come out this far from everything."
    }],
    notes: "The Unlucky Badge is in the Industry Pier neighborhood of Independence Port, directly in front of the Freedom Corps store.",
    links: [
        {title: "Unlucky Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Unlucky_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "8"
};
