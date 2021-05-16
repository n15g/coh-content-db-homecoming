import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";
import {IndependencePort} from "../../map/independence-port";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";
import {TerraVolta} from "../../map/terra-volta";

export const Historian: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "historian",
    setTitleId: 154,
    names: [
        {value: "Historian"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have learned the history of the U.N. Special Council on Superhuman Activities.`}
    ],
    links: [
        {title: "Historian Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Historian_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png"}
    ],
    partials: [
        {
            key: "hist-0",
            type: BadgePartialType.PLAQUE,
            mapKey: TalosIsland.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-1528.0, 168.0, 7554.0],
            inscription: `After the devastating 1999 terrorist attack on the Midnight Squad, Rebecca Foss spoke here in favor of the creation of a United Nations Special Council on Super Human Activities. She said, 'Paragon City has suffered a great loss. Someone must step up to take the reins. Hero Corps puts its faith firmly in the proposed U.N. council, and pledges to support all its actions.'`,
            notes: `This plaque is in [map:${TalosIsland.key}], 226 yards East of the Paragon City Monorail marker.`,
            vidiotMapKey: "4"
        },
        {
            key: "hist-1",
            type: BadgePartialType.PLAQUE,
            mapKey: IndependencePort.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-1080.0, 6.0, 2312.0],
            inscription: `In January 2000, a ceremony was held at this site to celebrate the creation of the United Nations Special Council on Super Human Activities. Among the attendees was the Freedom Phalanx's Statesman, who said, 'The world has become too large for me to watch over alone. I am happy to welcome the United Nations to the battle.'`,
            notes: `This plaque is in [map:${IndependencePort.key}], located on the southeast rock outcropping of Power Island. It's 742 yards from the Justice Quay marker and 843 yards southeast from the Terra Volta marker.`,
            vidiotMapKey: "4"
        },
        {
            key: "hist-2",
            type: BadgePartialType.PLAQUE,
            mapKey: EchoDarkAstoria.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [2493.0, 92.0, 486.0],
            inscription: `This tomb houses the remains of several members of the Midnight Squad, who were murdered during a sneak attack on their secret Terra Volta facility. It was this action that prompted the creation of the United Nations Special Council on Super Human Activities.`,
            notes: `This plaque is in [map:${EchoDarkAstoria.key}], approximately 456 yds NW of Moth marker and 586 NE of Barca Plaza marker.`,
            vidiotMapKey: "4"
        },
        {
            key: "hist-3",
            type: BadgePartialType.PLAQUE,
            mapKey: TerraVolta.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [2875.0, 100.0, -3972.0],
            inscription: `In the late 1990's, super-powered mercenary groups had become active all over the world. The situation had clearly gotten out of hand, but it was a mercenary activity right here in Paragon City that spurred the creation of the U.N. Special Council on Super Human Activities. Late one night in September of 1999, 6 super-powered mercenaries slipped into this factory complex and made off with several canisters of lethal gas, a byproduct of the factory's machinery. The Freedom Phalanx bested several of the mercenaries, but they were too late to stop one fo the villains from getting away with the gas. Aghast, the city waited and watched. Something bad was about to happen. But nobody knew what.`,
            notes: `This plaque is in [map:${TerraVolta.key}], approximately 156 yds East of Rogers Industries marker along fence south side of road.`,
            vidiotMapKey: "3"
        },
        {
            key: "hist-4",
            type: BadgePartialType.PLAQUE,
            mapKey: TerraVolta.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-636.0, 5.0, -6188.0],
            inscription: `In the late 1990's, super-powered mercenary groups had become active all over the world. The situation had clearly gotten out of hand, but it was a mercenary activity right here in Paragon City that spurred the creation of the U.N. Special Council of Super Human Activities. In September 1999, super-powered mercenaries stole poisonous gas from a Terra Volta factory. Days later, they struck. They attacked the complex that once rested on this site, gassing the people within. When the Freedom Phalanx investigated, it was discovered that the facility had been a front for an undercover Midnight Squad operation. Several of the Squad's more secretive researchers had been living in this facilty, under the belief that this subterfuge would keep them safe. Forty-seven men and women died in the attack; to this day, no one knows who the perpetrators were.`,
            notes: `This plaque is in [map:${TerraVolta.key}], approximately 366 yds NW of Challanger Technology marker.`,
            vidiotMapKey: "4"
        }
    ]
};
