import {ALIGNMENT_VILLAIN, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";
import {BloodyBay} from "../../map/bloody-bay";
import {SirensCall} from "../../map/sirens-call";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const Swashbuckler: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "swashbuckler",
    setTitleId: 315,
    names: [
        {value: "Swashbuckler"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `Arrgh, matey! You be a mighty scholar o' piracy!`}
    ],
    links: [
        {title: "Swashbuckler Badge", href: "https://paragonwiki.com/wiki/Swashbuckler_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-v.png"}
    ],
    partials: [
        {
            key: "swas-0",
            type: BadgePartialType.PLAQUE,
            mapKey: PortOakes.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [-3113.0, 207.0, -1550.0],
            inscription: `Blackbeard himself captured this fort in 1718. He tortured and killed the ill-prepared French soldiers manning it, leaving behind legends of ghostly hauntings that still persist to this day. Father Martin Henri, a famous adventurer of the Rogue Isles, is said to have hallowed the fort by day, but there are rumors that the spirits return to the fort by night.`,
            notes: `In [map:${PortOakes.key}], head to Fort Hades in the northeast portion of the zone. The plaque is on the outer wall facing west near the northwest corner of the fort.`,
            vidiotMapKey: "2"
        },
        {
            key: "swas-1",
            type: BadgePartialType.PLAQUE,
            mapKey: BloodyBay.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [605.0, 0.0, -150.0],
            inscription: `Two of the most fearsome pirates to ply these seas were Mary Reade and Anne Bonny. So ferocious were these pirate queens that when their ship was captured in 1720, they were the only two to offer resistance. The two were captured and sentenced to death, but reprieved when it was learned they were pregnant.`,
            notes: `Plaque is in [map:${BloodyBay.key}] on the wall of a building behind some bushes about 200 yards north of the Ground Zero neighborhood marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "swas-2",
            type: BadgePartialType.PLAQUE,
            mapKey: SirensCall.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-200.0, -157.0, -942.0],
            inscription: `One of the cruelest pirates to roam these seas was Jean L'Olonnais. L'Olonnais hated the Spanish and murdered and tortured them every chance he got, even forcing one prisoner to eat another's heart. The pirate even commanded massive field armies and raided entire towns in the Caribbean and Rogue Isles. Eventually, the black-hearted fiend was captured by cannibals, and met a fitting end.`,
            notes: `Go to the eastern wall of the zone, in the middle of the northern section, right in the space between the Randall's Ruins and the Fossburg neighborhood boundaries. Look just west of the wall for the tallest, brown, thin smokestack that points the straightest upwards. The plaque is located right at the bottom of that smokestack, 255 yards south-south-east of the Fossburg marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "swas-3",
            type: BadgePartialType.PLAQUE,
            mapKey: NervaArchipelago.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [3795.0, 18.0, 7726.0],
            inscription: `Captain Kidd wasn't a pirate at all, but a 'privateer,' a captain given an official 'letter of marque' by the English government (in Kidd's case) to raid its enemies. Kidd captained the famous Adventure Galley, and only captured one lucrative prize: the Queddah Merchant. Unfortunately, the East India Company had an interest in the ship and had Kidd branded a pirate. Legend says he hid his treasure somewhere around New York, or perhaps here in Crimson Cove, before he was eventually caught and hanged.`,
            notes: `From the ferry in the [map:${NervaArchipelago.key}], leave the dock and head north along the west coastline. The monument is a plaque on the side of the seawall just before it angles to the left (west) and changes from brick into cement.`,
            vidiotMapKey: "1"
        }
    ]
};
