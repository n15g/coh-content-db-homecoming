import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {LabyrinthOfFog} from "../../map/labyrinth-of-fog";

export const GreekPhilosopher: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "greekphilosopher",
    setTitleId: 2531,
    names: [
        {value: "GreekPhilosopher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You followed all the fruity crumbs and peeped the 20 lessons brought to you by the letter 'Resistance.' Whether or not you chomp-a-chomp on this tasty knowing is up to you, but now you know it's time for the other half of the battle.`}
    ],
    links: [
        {title: "Greek Philosopher Badge", href: "https://homecoming.wiki/wiki/Greek_Philosopher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/greek-philosopher.png"}
    ],
    partials: [
        {
            key: "gree-0",
            type: BadgePartialType.PLAQUE,
            mapKey: Labyrinth.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [469.7, -205.0, 2713.8],
            inscription: `It was over tavern ale, shared whilst waiting out the storm. This sailor spoke of ominous tidings, of nightmares given form. An evil catastrophe, feeding upon man's fear, it grew dense. They spoke of the fog that plagued the southwest isles hence.`,
            notes: `This plaque is in the Core of The Labyrinth of Fog. It is located inside the structure near the purple portal.`,
        },
        {
            key: "gree-1",
            type: BadgePartialType.PLAQUE,
            mapKey: Labyrinth.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [227.5, -84.0, 2669.2],
            inscription: `This divine prison would inherit the strength of those within. An inescapable maze constructed by human imagination. Entrusted to the rulers of the land, the calamity was hidden. The labyrinth shackling the catastrophic fog was forbidden.`,
            notes: `This plaque is The Labyrinth of Fog. It is located in front of the Gate of Darkness pillar.`,
        },        
        {
            key: "gree-2",
            type: BadgePartialType.PLAQUE,
            mapKey: Labyrinth.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [584.7, -113.3, 2800.5],
            inscription: `Hope itself became obscured, the land lost in a sea of grey. Few remained to make a stand, for deliverance they could only pray. Then a brilliant plan was proposed, the fog itself could be contained. An infinite vessel it would demand, an eternal prison forever maintained.`,
            notes: `This plaque is in the Core of The Labyrinth of Fog. It is located by the large dead tree.`,
        },
        {
            key: "gree-3",
            type: BadgePartialType.PLAQUE,
            mapKey: Labyrinth.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [289.9, -101.3, 2402.0],
            inscription: `The malevolent fog, all-powerful, but forever to be contained. The calamity's will was imposed, with combat would they be entertained. Those who offered their souls, given immortality to forever fight, the strongest Gladiator would earn the fog's favor and might.`,
            notes: `This plaque is in the Core of The Labyrinth of Fog.  It is located behind the small structure on top of the sideways temple.`,
        },
        {
            key: "gree-4",
            type: BadgePartialType.PLAQUE,
            mapKey: Labyrinth.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [543.1, 7.0, 2856.0],
            inscription: `The king of fools, for divine wisdom he would not heed. A traitorous, blasphemous act, let none forget his deed. Due to the consequences of thoughtless, brazen sin. The labyrinth gave birth to its immortal guardian.`,
            notes: `This plaque is in the Core of The Labyrinth of Fog.  It is located by the fog brazier.`,
        },
        {
            key: "gree-5",
            type: BadgePartialType.PLAQUE,
            mapKey: Labyrinth.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [395.0, -245.3, 2748.7],
            inscription: `A horde most unholy, fear given shape, guided by an unseen hand. The time for heroes had come, and many sought to defend the land. Against the endless fog they strove, but it was too dense, too deep. Every monster was cut down, yet no victory could they reap.`,
            notes: `This plaque is in the Core of The Labyrinth of Fog. It is located inside the mausoleum.`,                               
        }
    ]
};
