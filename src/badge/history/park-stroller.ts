import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";

export const ParkStroller: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "park-stroller",
    setTitleId: 2274,
    names: [
        {value: "Park Stroller"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have visited all of Brickstown's parks!`}
    ],
    links: [
        {title: "Park Stroller Badge", href: "https://paragonwiki.com/wiki/Park_Stroller_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/park-stroller.png"}
    ],
    partials: [
        {
            key: "park-0",
            type: BadgePartialType.PLAQUE,
            mapKey: Brickstown.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [768.0, 0.0, -1532.0],
            inscription: `Brickstown's economy was hit hard when Galaxy City came under attack, and a crime wave like none other arose in its aftermath. It was during this dark time that many of the city's empty plots and construction yards became cesspools of illicit activity. It wasn't until Brickstown's own Justin Sinclair made it his civic mission to turn these dilapidated lots into verdant recreational parks for all citizens to enjoy. West Park is the landmark first of many parks that has buried the garbage of old Brickstown, and along with it, its crime.`,
            notes: `This plaque is in [map:${Brickstown.key}], located 142 yards northeast of the entrance to Independence Port.`,
            vidiotMapKey: "3"
        },
        {
            key: "park-1",
            type: BadgePartialType.PLAQUE,
            mapKey: Brickstown.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-2368.0, -7.0, -479.0],
            inscription: `To Justin Sinclair the Ziggurat is a thing by which the citizens of Brickstown should feel empowered. It is not a symbol of fear, but one of hope. Sentinel Park admirably looks upon this grand monument knowing that it's not only what keeps Brickstown safe from villainy, but the entirety of Paragon City. Sentinel Park was proudly built with these values in mind.`,
            notes: `This plaque is [map:${Brickstown.key}], 316 yards east of the Prison Power Station neighborhood marker.`,
            vidiotMapKey: "4"
        },
        {
            key: "park-2",
            type: BadgePartialType.PLAQUE,
            mapKey: Brickstown.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-3.0, 0.0, 1344.0],
            inscription: `Seven Gates is home to the majority of Brickstown's working-class citizens - industrious men and women who make this city a better place to live. It is unto them that Justin Sinclair, in coordination with the Brickstown City Council dedicates this park. Seven Gates' residents now have a peaceful place to relax and enjoy the outdoors, all within the comfort and convenience of their own backyard.`,
            notes: `This plaque is in [map:${Brickstown.key}], 80 yards south of Serafina, the Magic Store contact.`,
            vidiotMapKey: "5"
        }
    ]
};