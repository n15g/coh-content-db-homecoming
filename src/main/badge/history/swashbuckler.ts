import { BadgeData, mapLink } from 'coh-content-db'
import { PortOakes } from '../../map/port-oakes'
import { BloodyBay } from '../../map/bloody-bay'
import { SirensCall } from '../../map/sirens-call'
import { NervaArchipelago } from '../../map/nerva-archipelago'

export const Swashbuckler: BadgeData = {
  type: 'HISTORY',
  key: 'swashbuckler',
  setTitle: { id: 315 },
  name: [
    { value: 'Swashbuckler' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `Arrgh, matey! You be a mighty scholar o' piracy!` },
  ],
  links: [
    { title: 'Swashbuckler Badge', href: 'https://homecoming.wiki/wiki/Swashbuckler_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-v.png' },
  ],
  partials: [
    {
      key: 'swas-0',
      type: 'PLAQUE',
      mapKey: PortOakes.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-3113, 207, -1550],
      plaqueInscription: `Blackbeard himself captured this fort in 1718. He tortured and killed the ill-prepared French soldiers manning it, leaving behind legends of ghostly hauntings that still persist to this day. Father Martin Henri, a famous adventurer of the Rogue Isles, is said to have hallowed the fort by day, but there are rumors that the spirits return to the fort by night.`,
      notes: `In ${mapLink(PortOakes)}, head to Fort Hades in the northeast portion of the zone. The plaque is on the outer wall facing west near the northwest corner of the fort.`,
      vidiotMapKey: '2',
    },
    {
      key: 'swas-1',
      type: 'PLAQUE',
      mapKey: BloodyBay.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [605, 0, -150],
      plaqueInscription: `Two of the most fearsome pirates to ply these seas were Mary Reade and Anne Bonny. So ferocious were these pirate queens that when their ship was captured in 1720, they were the only two to offer resistance. The two were captured and sentenced to death, but reprieved when it was learned they were pregnant.`,
      notes: `Plaque is in ${mapLink(BloodyBay)} on the wall of a building behind some bushes about 200 yards north of the Ground Zero neighborhood marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'swas-2',
      type: 'PLAQUE',
      mapKey: SirensCall.key,
      plaqueType: 'MONUMENT',
      loc: [-200, -157, -942],
      plaqueInscription: `One of the cruelest pirates to roam these seas was Jean L'Olonnais. L'Olonnais hated the Spanish and murdered and tortured them every chance he got, even forcing one prisoner to eat another's heart. The pirate even commanded massive field armies and raided entire towns in the Caribbean and Rogue Isles. Eventually, the black-hearted fiend was captured by cannibals, and met a fitting end.`,
      notes: `Go to the eastern wall of the zone, in the middle of the northern section, right in the space between the Randall's Ruins and the Fossburg neighborhood boundaries. Look just west of the wall for the tallest, brown, thin smokestack that points the straightest upwards. The plaque is located right at the bottom of that smokestack, 255 yards south-south-east of the Fossburg marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'swas-3',
      type: 'PLAQUE',
      mapKey: NervaArchipelago.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [3795, 18, 7726],
      plaqueInscription: `Captain Kidd wasn't a pirate at all, but a 'privateer,' a captain given an official 'letter of marque' by the English government (in Kidd's case) to raid its enemies. Kidd captained the famous Adventure Galley, and only captured one lucrative prize: the Queddah Merchant. Unfortunately, the East India Company had an interest in the ship and had Kidd branded a pirate. Legend says he hid his treasure somewhere around New York, or perhaps here in Crimson Cove, before he was eventually caught and hanged.`,
      notes: `From the ferry in the ${mapLink(NervaArchipelago)}, leave the dock and head north along the west coastline. The monument is a plaque on the side of the seawall just before it angles to the left (west) and changes from brick into cement.`,
      vidiotMapKey: '1',
    },
  ],
}
