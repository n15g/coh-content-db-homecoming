import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";
import {IndependencePort} from "../../map/independence-port";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";
import {TerraVolta} from "../../map/terra-volta";

export const Researcher: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "researcher",
    setTitleId: 156,
    names: [
        {value: "Researcher"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have learned the sordid history of former mayor of Paragon City, Spanky Rabinowitz.`}
    ],
    links: [
        {title: "Researcher Badge", href: "https://paragonwiki.com/wiki/Researcher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png"}
    ],
    partials: [
        {
            key: "rese-0",
            type: BadgePartialType.PLAQUE,
            mapKey: TalosIsland.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-3680.0, 128.0, 1519.0],
            inscription: `After his fourth re-election as mayor, 'Spanky' Rabinowitz threw an enormous gala in this meadow. Brightly colored tents dotted the grass, and the Paragon City Philharmonic turned out to play the event. It is rumored that such shady characters as Al Capone and Nathaniel Frost attended the event.`,
            notes: `This plaque is in [map:${TalosIsland.key}], 47 ft due west of the Ithaca Island marker.`,
            vidiotMapKey: "2"
        },
        {
            key: "rese-1",
            type: BadgePartialType.PLAQUE,
            mapKey: TalosIsland.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-1147.0, 228.0, 5688.0],
            inscription: `Mayor 'Spanky' Rabinowitz was born on this very street, in 1878 to Aaron and Maria Rabinowitz. Those who knew the mayor well say that he often returned to this area when troubled, to walk the streets he grew up on and contemplate the city's future.`,
            notes: `This plaque is [map:${TalosIsland.key}], 118 yds due east of the New Corinth marker.`,
            vidiotMapKey: "3"
        },
        {
            key: "rese-2",
            type: BadgePartialType.PLAQUE,
            mapKey: IndependencePort.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-1626.0, 5.0, 5252.0],
            inscription: `In the 1920's, it was considered most unlucky not to have your ship christened by Mayor 'Spanky' Rabinowitz. His services were so greatly in demand that he was often to be found in the shipyard on a weekday afternoon, playing poker with the dock hands and awaiting the next opportunity to discharge his duties.`,
            notes: `This plaque is in [map:${IndependencePort.key}], 263 yds south by southeast of the Justice Quay marker.`,
            vidiotMapKey: "3"
        },
        {
            key: "rese-3",
            type: BadgePartialType.PLAQUE,
            mapKey: EchoDarkAstoria.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [5218.0, 8.0, 129.0],
            inscription: `While Mayor 'Spanky' Rabinowitz was no paragon of virtue, it cannot be argued that Paragon City prospered under his guidance. Historians cannot account for this. Some have theorized that Spanky had some sort of mystical power on his side; it has even been theorized that he sold his soul to a demon in exchange for the city's well-being. After his death, a number of old relics were found in a secret compartment in his private office, including a map of Dark Astoria.`,
            notes: `This plaque is in [map:${EchoDarkAstoria.key}], 533 yds due north of the Romero Heights marker.`,
            vidiotMapKey: "2"
        },
        {
            key: "rese-4",
            type: BadgePartialType.PLAQUE,
            mapKey: EchoDarkAstoria.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [5888.0, 8.0, 1543.0],
            inscription: `Though the details remain unclear, it is rumored that Mayor 'Spanky' Rabinowitz often met with Nathaniel Frost here. Some historians have theorized that Frost paid Spanky to keep the police from investigating the Frost crime ring. Others have posited that Spanky paid Frost to keep the crime ring's activities from becoming violent. The real purpose of these visits may never be known.`,
            notes: `This plaque is in [map:${EchoDarkAstoria.key}], 242 yds west of the Romero Heights marker.`,
            vidiotMapKey: "3"
        },
        {
            key: "rese-5",
            type: BadgePartialType.PLAQUE,
            mapKey: TerraVolta.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [2090.0, 8.0, -6055.0],
            inscription: `Years after his death, many of the Mayor 'Spanky' Rabinowitz's secret dealings were still coming to light. Though his heirs have yet to piece together the entire picture, it seems that Spanky had money secretly invested in numerous businesses within Paragon City, including this factory. His heirs cannot quite account for the money's origin.`,
            notes: `This plaque is in [map:${TerraVolta.key}], 352 yds west-southwest of the Coroman Manufacturing marker.`,
            vidiotMapKey: "2"
        }
    ]
};