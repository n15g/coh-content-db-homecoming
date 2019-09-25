import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";
import {IndependencePort} from "../../map/independence-port";

export const Authority: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "authority",
    names: [{value: "Authority"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: "You have learned the history of Freedom Phalanx."}],
    links: [
        {title: "Authority Badge", href: "https://paragonwiki.com/wiki/Authority_Badge"}
    ],
    imageKeys: [
        {value: "core.history.plaque"}
    ],
    partials: [
        {
            key: "ti-1",
            type: BadgePartialType.PLAQUE,
            mapKey: TalosIsland.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [1777.0, 22.0, 7843.0],
            inscription: "When the Freedom Phalanx became the legally recognized Super Group in 1953, a grand celebration was held at this site." +
                " Among the attendees was Vambrace, who said, 'I am humbled by the faith you have placed in myself and the Freedom Phalanx." +
                " Again and again, the people of this city remind me why it is a place worth fighting for.'",
            notes: "At the base of the statue of Talos, behind its left heel.",
            vidiotMapKey: "1"
        },
        {
            key: "ip-1",
            type: BadgePartialType.PLAQUE,
            mapKey: IndependencePort.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [910.0, 100.0, -4175.0],
            inscription: "When the Freedom Phalanx became the first legally recognized Super Group in 1953, Statesman held a conference at Valor Bridge." +
                " He said, 'The valiant hero Atlas died defending the city on this very bridge." +
                " I do not know how to thank you for your faith in the Freedom Phalanx, except to say that I, too, am ready to die in your defense.'",
            notes: "At the north end of Valor Bridge. It is 180 yards south of the Valor Bridge marker.",
            vidiotMapKey: "1"
        },
        {
            key: "ip-2",
            type: BadgePartialType.PLAQUE,
            mapKey: IndependencePort.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-1035.0, 36.0, -2441.0],
            inscription: "In 1953, the Freedom Phalanx prevented a ship bearing copious amounts of explosives from docking at this harbor." +
                " When the captain was interrogated, it became clear that he was on a mission of sabotage." +
                " Public sentiment for the Freedom Phalanx swelled, and Mayor Kyle Legretsky proposed that the Citizens Crime Fighting Act be expanded." +
                " He proposed that groups such as the Freedom Phalanx be officially sanctioned fighting forces.",
            notes: "Along the road west of Icon. It is 188 yards due west of the Tailor shop.",
            vidiotMapKey: "2"
        },
        {
            key: "eda-1",
            type: BadgePartialType.PLAQUE,
            mapKey: IndependencePort.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [3420.0, 46.0, 3038.0],
            inscription: "When the Freedom Phalanx became an officially recognized Super Group in 1953, the hero Vambrace made a pledge." +
                " 'Dark Astoria will be restored to its natural state,' he said." +
                " 'The Freedom Phalanx is committed to saving every part of Paragon City, even those that may seem lost.",
            notes: "Approximately 178 yards east-southeast from the Toffet Terrace marker.",
            vidiotMapKey: "1"
        },
        {
            key: "tv-1",
            type: BadgePartialType.PLAQUE,
            mapKey: IndependencePort.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [351.0, 196.0, -3605.0],
            inscription: "In 1953, citizens poured into the streets in support of the Freedom Phalanx becoming a legally recognized Super Group." +
                " The workers of Terra Volta were particularly adamant in their support, having witnessed many villainous activities over the past few decades." +
                " Each night, when the factory whistles blew, a shout would go up across the zone, echoing in the evening air: 'Freedom Phalanx! Freedom Phalanx!'",
            notes: "300 yards east by northeast from the Terra Volta Reactor marker.",
            vidiotMapKey: "1"
        }
    ]
};
