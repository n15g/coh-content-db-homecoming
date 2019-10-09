import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {IndependencePort} from "../../map/independence-port";

export const AirLifter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "air-lifter",
    names: [{value: "Air Lifter"}],
    alignment: ALIGNMENT_HERO,
    mapKey: IndependencePort.key,
    location: [173.0, 160.0, 22.0],
    badgeText: [{value: "This is where workers in Terra Volta are air lifted in. From here, they're taken by several Longbow skiffs into the heart of the reactor."}],
    notes: "The Air Lifter Badge is in the Power Island neighborhood of Independence Port.\n\nIt is 38 yards slightly northeast of the Terra Volta gate.",
    links: [
        {title: "Air Lifter Badge", href: "https://paragonwiki.com/wiki/Air_Lifter_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "4"
};
