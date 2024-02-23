import {ALIGNMENT_VILLAIN, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {CapAuDiable} from "../../map/cap-au-diable";

export const Technofreak: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "technofreak",
    setTitleId: 318,
    names: [
        {value: "Technofreak"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `Let's all welcome a better future through the wonders of technology!`}
    ],
    links: [
        {title: "Technofreak Badge", href: "https://homecoming.wiki/wiki/Technofreak_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-v.png"}
    ],
    partials: [
        {
            key: "tech-0",
            type: BadgePartialType.PLAQUE,
            mapKey: CapAuDiable.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [923.0, 21.0, -1422.0],
            inscription: `Aeon University is dedicated to producing the brilliant minds of tomorrow. Heroes like the great Dr. Aeon could not have improved the fate of all humanity without institutions of higher learning to fill and shape young minds with the latest advancements in humanities, the arts, and of course, technology. Aeon University offers revolutionary courses in 'Transdimensional Shift Phasing', 'Demolitions for a Better Tomorrow', 'Cloning and You and You', and 'Power Sources: Risk vs. Reward'.`,
            notes: `This monument is located just beside the doors to the central building at Aeon University.`,
            vidiotMapKey: "2"
        },
        {
            key: "tech-1",
            type: BadgePartialType.PLAQUE,
            mapKey: CapAuDiable.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-2428.0, 224.0, -932.0],
            inscription: `Dr. Aeon's discovery of the Power Transference System created cheap, clean, and efficient energy for Cap au Diable. By tapping into the raw geothermal power of Mount Diable and transforming it into pure electricity, Dr. Aeon has saved the people of the island billions of dollars. More importantly, large corporations such as Crey Industries can use the incredible power output of the 'PTS' to conduct experiments for the betterment of mankind that would be prohibitive with traditional energy sources.`,
            notes: `This monument is located 129 yds north of the Mount Diable marker. The plaque is attached to the inside wall enclosing the power plant, beside some stacked freight containers.`,
            vidiotMapKey: "3"
        },
        {
            key: "tech-2",
            type: BadgePartialType.PLAQUE,
            mapKey: CapAuDiable.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [2345.0, 3.0, 1544.0],
            inscription: `One of Dr. Aeon's greatest inventions is NutriPaste. Made to the highest standards of nutrition under quality-controlled industrial conditions, Dr. Aeon's NutriPaste is an inexhaustible and inexpensive food-source for the people of the Rogue Isles. Flavors such as FishPaste and MeatPaste are a daily staple throughout the Isles, and new varieties are introduced every month. NutriPaste has even earned its place in the schools of the Isles, where it keeps children fit, happy and healthy. Thanks to Dr. Aeon's incredible NutriPaste, the next generation of the Rogue Isles will grow up in the most efficient way possible. Strong and content, they will be ready and able to support Lord Recluse in his never-ending campaign against the oppressive vigilantes who rule the mainland.`,
            notes: `This monument is located under the awning on the north side of the building that faces the tailor.`,
            vidiotMapKey: "4"
        }
    ]
};
