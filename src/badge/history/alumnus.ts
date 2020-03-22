import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";
import {Croatoa} from "../../map/croatoa";

export const Alumnus: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "alumnus",
    setTitleId: 411,
    names: [
        {value: "Alumnus"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have learned the history of Croatoa.`}
    ],
    links: [
        {title: "Alumnus Badge", href: "https://paragonwiki.com/wiki/Alumnus_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png"}
    ],
    partials: [
        {
            key: "alum-0",
            type: BadgePartialType.PLAQUE,
            mapKey: AtlasPark.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-640.0, 18.0, 943.0],
            inscription: `On October 31, 2004, a creature known as Eochai was defeated on this spot. Although the creature and its minions were thought to be vanquished by Paragon City's heroes, it appears they have simply relocated. The northern village of Salamanca is beset by the creatures and is in grave need of heroic assistance.`,
            notes: `This plaque is in [map:${AtlasPark.key}], 326 yards due east of the entrance to the Sewer Network.`,
            vidiotMapKey: "7"
        },
        {
            key: "alum-1",
            type: BadgePartialType.PLAQUE,
            mapKey: Croatoa.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [541.0, 0.0, -1095.0],
            inscription: `These ruins are all that remains of the original village of Salamanca, established in 1641. Since their arrival, the Cabal have taken over the ruins and made them their home. It has been theorized that they feel most at home among these poor ashes.`,
            notes: `This plaque is in [map:${Croatoa.key}], 167 yards northeast of the Sunset Ridge neighborhood marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "alum-2",
            type: BadgePartialType.PLAQUE,
            mapKey: Croatoa.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [132.0, -32.0, -788.0],
            inscription: `It wasn't long ago that the spirit of War Witch chose this island to call her home. Though she will speak to the occasional hero, her revelations about her reasons for being here are cryptic at best. Some say she feels an affinity for the Cabal, after having lost her own coven at the hands of Requiem. Others say her presence here is atonement for some crime she commited during her life. Whatever her reasons, War Witch is an integral part of the strange mystery that surrounds Croatoa.`,
            notes: `This plaque is in [map:${Croatoa.key}], 57 yards west of War Witch.`,
            vidiotMapKey: "2"
        },
        {
            key: "alum-3",
            type: BadgePartialType.PLAQUE,
            mapKey: Croatoa.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-1033.0, 32.0, 2136.0],
            inscription: `The Occult Studies Annex of Paragon City University was established only recently, but already it's enrollment has taken a significant dive. Various artifacts and tomes stored within the university seem to be valuable to the ghastly creatures that haunt Croatoa, and it is only by the efforts of the magically inclined faculty that these creatures are kept at bay.`,
            notes: `This plaque is in [map:${Croatoa.key}]. In the Salamanca neighborhood, when approaching the university, turn right instead of going up the stairs with the lion statues. Following the sidewalk right, there is a small area with benches and a police drone. The plaque is located among the benches. It is 84 yards east of the Hospital.`,
            vidiotMapKey: "3"
        },
        {
            key: "alum-4",
            type: BadgePartialType.PLAQUE,
            mapKey: Croatoa.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-1305.0, 0.0, 2982.0],
            inscription: `No one can say how long this massive throne has rested here, but Salamanca's inhabitants are certain it arrived only after the mists of Croatoa closed in. Those brave enough to venture close have reported that a grotesque giant sometimes snoozes here. Most, however, leave the area strictly alone.`,
            notes: `This plaque is in the Misty Wood neighborhood of [map:${Croatoa.key}], about 330 yards SSE of the Field Analyst.`,
            vidiotMapKey: "4"
        }
    ]
};
