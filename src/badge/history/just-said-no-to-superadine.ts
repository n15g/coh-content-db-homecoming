import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";
import {SkywayCity} from "../../map/skyway-city";
import {Boomtown} from "../../map/boomtown";
import {Faultline} from "../../map/faultline";

export const JustSaidNoToSuperadine: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "just-said-no-to-superadine",
    setTitleId: 152,
    names: [
        {value: "Just Said No to Superadine"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have learned the history of Superadine, the newest designer drug to plague Paragon City.`}
    ],
    links: [
        {title: "Just Said No to Superadine Badge", href: "https://paragonwiki.com/wiki/Just_Said_No_to_Superadine_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png"}
    ],
    partials: [
        {
            key: "just-0",
            type: BadgePartialType.PLAQUE,
            mapKey: SteelCanyon.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-1761.0, 8.0, -1277.0],
            inscription: `This statue honors John Knox of the Midnight Squad, otherwise known as the Crimson Fist. Knox was among the many heroes to give their lives in the Rikti War, but he is best remembered for his efforts to keep Superadine off the streets. Using his powers of telepathy and divination, it was he who first linked the sale of Superadine to the Family.`,
            notes: `This plaque is in [map:${SteelCanyon.key}] and is wall mounted facing east at the base of the statue near the Independence Port gate.`,
            vidiotMapKey: "2"
        },
        {
            key: "just-1",
            type: BadgePartialType.PLAQUE,
            mapKey: SteelCanyon.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-2178.0, 8.0, 751.0],
            inscription: `This was the site of the first Superadine drug bust. Michael White, otherwise known as the Back Alley Brawler, was patrolling the area when he discovered a pair of thugs haggling over a strange green liquid. He arrested the villains, confiscated the drug, and brought it to the Freedom Phalanx for analysis. The Phalanx's top researcher, Dr. Brian Webb, confirmed the Brawler's worst fears: a new drug had been discovered, and its potency was unprecedented.`,
            notes: `This plaque is in [map:${SteelCanyon.key}] and is wall mounted facing north on the side of a building. It is just east of the Magic Store, 129 yards.`,
            vidiotMapKey: "3"
        },
        {
            key: "just-2",
            type: BadgePartialType.PLAQUE,
            mapKey: SkywayCity.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [509.0, 90.0, -5511.0],
            inscription: `This site marks the first known sighting of the strange creatures known colloquially as 'Trolls.' John Knox of the Midnight Squad was the first to observe these grotesque mutations. Afterward, he had this to say, 'I couldn't help but pity them. In a very real way, these are the people we're working to save.'`,
            notes: `This plaque is in [map:${SkywayCity.key}]. It is located just northeast of the northern Paragon City Monorail station on the corner of an elevated highway.`,
            vidiotMapKey: "2"
        },
        {
            key: "just-3",
            type: BadgePartialType.PLAQUE,
            mapKey: Boomtown.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [1140.0, 4.0, -135.0],
            inscription: `In March of 1986, with the mystical aid of the Midnight Squad, the Back Alley Brawler managed to track local Superadine distribution to a secret lab beneath this building. Little is known about the lab's contents. It is simply known that the Back Alley Brawler and the Statesman swore their comrades to secrecy after the battle.`,
            notes: `This plaque is in [map:${Boomtown.key}], 179 yds west-southwest of the Grenadier Village marker.`,
            vidiotMapKey: "4"
        },
        {
            key: "just-4",
            type: BadgePartialType.PLAQUE,
            mapKey: Faultline.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-920.0, 7.0, -640.0],
            inscription: `In late 1982, the Back Alley Brawler and his Regulators were trying to mop up the last traces of Superadine on the city streets. A tip led them to this building, a front company for the Family. During the raid, Harry Frost, the Family's leader, was accidentally killed, leaving his young son Sebastian to oversee his business. Since then, Superadine sales have inexplicably increased, despite the best efforts of the Brawler and his comrades.`,
            notes: `This plaque is in [map:${Faultline.key}]. It is wall mounted facing east just north of Yin's Market, 78 yards Southeast of Freight Lift A.`,
            vidiotMapKey: "3"
        }
    ]
};
