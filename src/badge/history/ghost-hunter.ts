import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";
import {StrigaIsle} from "../../map/striga-isle";

export const GhostHunter: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "ghost-hunter",
    setTitleId: 191,
    names: [
        {value: "Ghost Hunter"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have learned the rumors behind the fabled Ghost Ship.`}
    ],
    links: [
        {title: "Ghost Hunter Badge", href: "https://paragonwiki.com/wiki/Ghost_Hunter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png"}
    ],
    partials: [
        {
            key: "ghos-0",
            type: BadgePartialType.PLAQUE,
            mapKey: TalosIsland.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [1776.0, 37.0, 5179.0],
            inscription: `This plaque marks the first sighting of a mysterious ghostly vessel filled with a crew of gibbering spirits. Many people theorize that the vessel is Striga Isle's lost ship, the Moraine, which never returned to port after setting sail in the early 1930's. Some even believe that the crew is still trying to get home.`,
            notes: `This plaque is in [map:${TalosIsland.key}], on the dock next to the ferry to Striga Isle.`,
            vidiotMapKey: "5"
        },
        {
            key: "ghos-1",
            type: BadgePartialType.PLAQUE,
            mapKey: StrigaIsle.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-271.0, 104.0, -2517.0],
            inscription: `In 1932, the wives of the sailors on the good ship Moraine would gather on this little island. In the shadow of the lighthouse, they would wait, sometimes all night, for any sign of their husbands' homecoming.`,
            notes: `This plaque is in [map:${StrigaIsle.key}], 707 yards due north of the Port Noble neighborhood marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "ghos-2",
            type: BadgePartialType.PLAQUE,
            mapKey: StrigaIsle.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-2534.0, -24.0, -2113.0],
            inscription: `This tomb honors the sailors lost on the oil tanker Moraine, which set sail in 1932 and was never heard from again. Rumors indicate that the tanker was being used to smuggle ne'er-de-wells onto Striga Isle. It has been theorized that these illicit passengers caused the ship's sinking.`,
            notes: `This plaque is in [map:${StrigaIsle.key}], 137 yards east-southeast from the Bonny Morass neighborhood marker and 254 yards from The Wolf's Throat neighborhood marker on a straight line between them.`,
            vidiotMapKey: "2"
        },
        {
            key: "ghos-3",
            type: BadgePartialType.PLAQUE,
            mapKey: StrigaIsle.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-2667.0, 8.0, -414.0],
            inscription: `In 1932, the oil tanker Moraine was first launched from this site. Many people have claimed that the ship's misfortune was due to Captain Renyard Kale failing to ask Mayor Spanky Rabinowitz to christen the ship on its first voyage.`,
            notes: `This plaque is in [map:${StrigaIsle.key}], 330 yards due west of Ravenstorm.`,
            vidiotMapKey: "3"
        },
        {
            key: "ghos-4",
            type: BadgePartialType.PLAQUE,
            mapKey: StrigaIsle.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-3383.0, 88.0, 1002.0],
            inscription: `In 1932, an oil tanker known as the Moraine set off from this point. It was expected to remain at sea for several weeks; however, to this day, no one on Striga Isle has seen any sign of it.`,
            notes: `This plaque is in [map:${StrigaIsle.key}], 490 yards due south of Ravenstorm.`,
            vidiotMapKey: "4"
        }
    ]
};