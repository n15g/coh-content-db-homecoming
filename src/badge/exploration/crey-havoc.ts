import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {IndependencePort} from "../../map/independence-port";

export const CreyHavoc: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "crey-havoc",
    names: [{value: "Crey Havoc"}],
    alignment: ALIGNMENT_HERO,
    mapKey: IndependencePort.key,
    location: [-441.0, 2.0, -271.0],
    badgeText: [{value: "Crey had a facility in Independence Port for several years, but an industrial accident has permanently closed it."}],
    notes: "The Crey Havoc Badge is located on the Power Island neighborhood of Independence Port. It is just north of a ruined building east of the Terra Volta entrance." +
        " It is also located 256 yards northeast from the Terra Volta entrance.",
    links: [
        {title: "Crey Havoc Badge", href: "https://paragonwiki.com/wiki/Crey_Havoc_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "1"
};
