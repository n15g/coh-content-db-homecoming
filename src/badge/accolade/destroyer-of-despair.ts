import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {DarkAstoria} from "../../map/dark-astoria";

export const DestroyerOfDespair: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "destroyer-of-despair",
    setTitleId: 2205,
    names: [
        {value: "Destroyer of Despair"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Mot represented hatred and despair. It tried to twist the memories of all those it came across, aiming to make them believe there was no hope in their lives, that all of their hopes and dreams were meaningless. You fully conquered the forces of Mot and showed the creature just how wrong it was.`}
    ],
    notes: `Collect all six story arc completion badges, all six personal mission completion badges, and all five mission achievement badges in [map:${DarkAstoria.key}]`,
    links: [
        {title: "Destroyer of Despair Badge", href: "https://paragonwiki.com/wiki/Destroyer_of_Despair_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/destroyer-of-despair.png"}
    ]
};