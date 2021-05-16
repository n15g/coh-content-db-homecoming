import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";
import {SkywayCity} from "../../map/skyway-city";
import {Boomtown} from "../../map/boomtown";
import {Faultline} from "../../map/faultline";

export const Disciple: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "disciple",
    setTitleId: 153,
    names: [
        {value: "Disciple"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have learned the history behind the founding of Hero Corps.`}
    ],
    links: [
        {title: "Disciple Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Disciple_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png"}
    ],
    partials: [
        {
            key: "disc-0",
            type: BadgePartialType.PLAQUE,
            mapKey: SteelCanyon.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-4023.0, -80.0, -272.0],
            inscription: `In January of 2003, Rebecca Foss and Hero Corps returned to Paragon City. Ms. Foss held a conference here to commemorate the opening of the company's new headquarters in Steel Canyon. She said, 'The world has been through hard times indeed. All our heroes are needed now, more than ever. And Hero Corps is needed as well.'`,
            notes: `This plaque is in [map:${SteelCanyon.key}], 244 yards south of the Sewer Network Entrance marker, in Fools Gold District.`,
            vidiotMapKey: "1"
        },
        {
            key: "disc-1",
            type: BadgePartialType.PLAQUE,
            mapKey: SkywayCity.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [734.0, -121.0, -3747.0],
            inscription: `On this site in March of 1999, the hero Luminary gave a demonstration of his powers. Though public sentiment was against the fledgling company Hero Corps, Luminary was convinced he could turn that sentiment around. When he brought forth an aura of healing light, each person on the street felt touched. Still, some were unmoved. Eliza McCaffrey, one of the spectators remarked, 'Sure, his powers are amazing. That makes me all the more nervous that they're for sale!'`,
            notes: `This plaque is in [map:${SkywayCity.key}], 221 yds WNW of the marker for The Gruff.`,
            vidiotMapKey: "1"
        },
        {
            key: "disc-2",
            type: BadgePartialType.PLAQUE,
            mapKey: Boomtown.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-1908.0, 130.0, 758.0],
            inscription: `This plaque commemorates a massive protest held in opposition to the construction of Hero Corps headquarters. Among the protesters were a number of heroes, including Justin Greene, known in combat as Green Justice, and his mentor and friend Hero 1. Mr. Greene summed up the protester's sentiments with the following statement, 'How can the people of this city trust heroes who work for money? When you put your life in another man's hands, you have to know that he's helping you because he wants to. You have to know that his heart is really in it.'`,
            notes: `This plaque is in [map:${Boomtown.key}], 497 yds north-northwest of Powderkeg marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "disc-3",
            type: BadgePartialType.PLAQUE,
            mapKey: Boomtown.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-2648.0, 5.0, 3055.0],
            inscription: `This building was the site of the first clash between Hero Corps and the Freedom Phalanx. Determined to prove their worth to a doubtful public, Hero Corps had begun investigating the activities of an archvillain known as the Jade Maiden. In February of 1999, Luminary and his comrades in Hero Corps arrived here to arrest the villain, only to discover that the Freedom Phalanx was already on the trail. In the confusion that ensued, the Jade Maiden escaped.`,
            notes: `This plaque is in [map:${Boomtown.key}], 319 yds south and a tad east of Powderkeg marker.`,
            vidiotMapKey: "2"
        },
        {
            key: "disc-4",
            type: BadgePartialType.PLAQUE,
            mapKey: Boomtown.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-686.0, 272.0, 3123.0],
            inscription: `After the destruction of Hero Corp's first Paragon City office, the company planned to rebuild their headquarters here. But public sentiment could not have been more firmly set against them. Despite the patronage of Countess Crey, this site remained vacant, and in October 1999 Hero Corps was forced to move on to another city.`,
            notes: `This plaque is in [map:${Boomtown.key}], 882 yds north-northwest of the entrance.`,
            vidiotMapKey: "3"
        },
        {
            key: "disc-5",
            type: BadgePartialType.PLAQUE,
            mapKey: Faultline.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-245.0, -44.0, -423.0],
            inscription: `In May of 1999, following the destruction of Hero Corps' original Paragon City headquarters, Countess Crey held a conference at this site to announce her sponsorship of the ill-fated company. She joined hands with Rebecca Foss, Hero Corps' founder, and said, 'A new world of heroes is upon us. Crey Technologies will not be left behind.'`,
            notes: `This plaque is in [map:${Faultline.key}], 180 yds north of the Aftershock marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "disc-6",
            type: BadgePartialType.PLAQUE,
            mapKey: Faultline.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [631.0, -103.0, 21.0],
            inscription: `This plaque marks the site of the original Hero Corps headquarters, which was destroyed by a gang of mysterious soldiers clad in power armor. Although Hero Corps' employees made it out alive, Hero Corps was devastated by the loss. Its founder, Rebecca Foss, spoke tearfully the next morning on the radio program 'Wake up Paragons.' 'Who could hate us so much?' she asked, 'We only want to help!'`,
            notes: `This plaque is in [map:${Faultline.key}], 227 yds due west of the Aftershock marker.`,
            vidiotMapKey: "2"
        }
    ]
};
