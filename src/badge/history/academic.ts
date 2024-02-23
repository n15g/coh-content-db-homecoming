import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {PeregrineIsland} from "../../map/peregrine-island";
import {RiktiWarZone} from "../../map/rikti-war-zone";
import {AbandonedSewerNetwork} from "../../map/abandoned-sewer-network";

export const Academic: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "academic",
    setTitleId: 159,
    names: [
        {value: "Academic"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have learned the history of the successful takeover of Washington, D.C. by Nemesis.`}
    ],
    links: [
        {title: "Academic Badge", href: "https://homecoming.wiki/wiki/Academic_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png"}
    ],
    partials: [
        {
            key: "acad-0",
            type: BadgePartialType.PLAQUE,
            mapKey: PeregrineIsland.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-1904.0, 4.0, -7229.0],
            inscription: `In 1945, six members of the Freedom Phalanx met on Peregrine Island to save the world. The clever Dr. Mnemonic had synthesized an antidote to the poison gas Nemesis had released across the country, but it had to be distributed quickly. With only minutes to spare, these six heroes took off across the country carrying large batches of the airborne antidote. They managed to get the antidote to each infected city, preventing a disaster of epic proportions.`,
            notes: `This plaque is in the Cutlass Isles area of [map:${PeregrineIsland.key}]. It is at the base of a structural pillar near the middle of the area. It is 159 yards NW of the Cutlass Isles' marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "acad-1",
            type: BadgePartialType.PLAQUE,
            mapKey: RiktiWarZone.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [2002.0, 130.0, -7041.0],
            inscription: `On this site, Statesman and Maiden Justice battled a horde of Nemesis's strange steam-powered robots. The robots' fatal flaw was their inability to adapt to new situations; once events started to transpire differently than Nemesis had envisioned, the robots were next to useless. Maiden Justice used her cunning to confound the robots, while Statesman relied on his awesome strength. In the end, they had defeated some six hundred robots, freeing Paragon City from Nemesis's grasp.`,
            notes: `This plaque is in the [map:${RiktiWarZone.key}]. It is wall mounted, facing north west on a building north east of the Rikti ship.It is 382 yds NE of Rikti Crash Site Marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "acad-2",
            type: BadgePartialType.PLAQUE,
            mapKey: AbandonedSewerNetwork.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [465.0, -568.0, -1558.0],
            inscription: `In 1945, the Freedom Phalanx was determined to thwart Nemesis's campaign to wrest control of the U.S. Paragon City was one of the many major metropolises Nemesis had infected with his strange poison gas. The hero known as the Dark Watcher knew that he had to find the source of the gas. Using his powers of extra-sensory perception, the Dark Watcher journeyed into the bowels of the city. Here, in the sewer network, he found storage tanks full of the gas, slowly leaking their noxious fumes into Paragon City's environment. The Dark Watcher disposed of the gas, making it possible for the city to be cured.`,
            notes: `This plaque is in the [map:${AbandonedSewerNetwork.key}] on the left side of the corridor that marks the entrance to Steel Canyon Sector. It is roughly 800 yards west of the Steel Canyon Sewer network entrance. Note that if you go in the regular Sewer Network the rooms will all look the same and you can reach the coordinates below, but the plaque is absent.`,
            vidiotMapKey: "1"
        }
    ]
};
