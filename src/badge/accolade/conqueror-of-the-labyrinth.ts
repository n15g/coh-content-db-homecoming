import {ALIGNMENT_ANY, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {GreekPhilosopher} from "../history/greek-philosopher";
import {HiddenInTheFog} from "../exploration/hidden-in-the-fog";
import {MalevolentIntoxication} from "../defeat/malevolent-intoxication";
import {SlayerOfTheMinotaur} from "../defeat/slayer-of-the-minotaur";

export const ConquerorOfTheLabyrinth: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "conqueror-of-the-labyrinth",
    setTitleId: 2532,
    names: [
        {value: "Conqueror of the Labyrinth"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have proven your prowess by having not only explored, but also conquered everything that stood in your path within the maze of corridors known as the Labyrinth of Fog.`},
    ],
    notes: `Awards the Core Attunement power.`,
    links: [
        {title: "Conqueror of the Labyrinth", href: "https://homecoming.wiki/wiki/Conqueror_of_the_Labyrinth_Badge"},
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/conqueror-of-the-labyrinth.png"}
    ],
    effect: `Core Attunement`,
    partials: [
        {key: GreekPhilosopher.key, type: BadgePartialType.BADGE, badgeKey: GreekPhilosopher.key},
        {key: HiddenintheFog.key, type: BadgePartialType.BADGE, badgeKey: HiddenintheFog.key},
        {key: MalevolentIntoxication.key, type: BadgePartialType.BADGE, badgeKey: MalevolentIntoxication.key},
        {key: SlayeroftheMinotaur.key, type: BadgePartialType.BADGE, badgeKey: SlayeroftheMinotaur.key},
    ]
};
