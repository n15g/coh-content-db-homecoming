import { BadgeData } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'
import { BloodyBay } from '../../zone/bloody-bay'
import { SirensCall } from '../../zone/sirens-call'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const Swashbuckler: BadgeData = {
  type: 'history',
  key: 'swashbuckler',
  setTitleId: [315],
  name: 'Swashbuckler',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `Arrgh, matey! You be a mighty scholar o' piracy!`,
  links: [
    { title: 'Swashbuckler Badge', href: 'https://homecoming.wiki/wiki/Swashbuckler_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-v.png',
  requirements: [
    {
      key: 'swas-0',
      type: 'monument',
      location: { zoneKey: PortOakes.key, coords: [-3113, 207, -1550], icon: 'plaque', iconText: '2' },
      monumentText: `Blackbeard himself captured this fort in 1718.
He tortured and killed the ill-prepared French soldiers manning it, leaving behind legends of ghostly hauntings that still persist to this day.
Father Martin Henri, a famous adventurer of the Rogue Isles, is said to have hallowed the fort by day, but there are rumors that the spirits return to the fort by night.`,
      notes: `Located in Fort Hades, on the outer wall near the northwest corner of the fort.`,
    },
    {
      key: 'swas-1',
      type: 'monument',
      location: { zoneKey: BloodyBay.key, coords: [605, 0, -150], icon: 'plaque', iconText: '1' },
      monumentText: `Two of the most fearsome pirates to ply these seas were Mary Reade and Anne Bonny.
So ferocious were these pirate queens that when their ship was captured in 1720, they were the only two to offer resistance.
The two were captured and sentenced to death, but reprieved when it was learned they were pregnant.`,
      notes: `Located on the wall of a building behind some bushes about 200 yards north of the Ground Zero neighborhood marker.`,
    },
    {
      key: 'swas-2',
      type: 'monument',
      location: { zoneKey: SirensCall.key, coords: [-200, -157, -942], icon: 'pedestal', iconText: '1' },
      monumentText: `One of the cruelest pirates to roam these seas was Jean L'Olonnais.
L'Olonnais hated the Spanish and murdered and tortured them every chance he got, even forcing one prisoner to eat another's heart.
The pirate even commanded massive field armies and raided entire towns in the Caribbean and Rogue Isles.
Eventually, the black-hearted fiend was captured by cannibals, and met a fitting end.`,
      notes: `Located 255 yards south-southeast of the Fossburg marker, just west of the tallest, thin smokestack.`,
    },
    {
      key: 'swas-3',
      type: 'monument',
      location: { zoneKey: NervaArchipelago.key, coords: [3795, 18, 7726], icon: 'plaque', iconText: '1' },
      monumentText: `Captain Kidd wasn't a pirate at all, but a 'privateer,' a captain given an official 'letter of marque' by the English government (in Kidd's case) to raid its enemies.
Kidd captained the famous Adventure Galley, and only captured one lucrative prize: the Queddah Merchant. Unfortunately, the East India Company had an interest in the ship and had Kidd branded a pirate.
Legend says he hid his treasure somewhere around New York, or perhaps here in Crimson Cove, before he was eventually caught and hanged.`,
      notes: `Located on the side of the seawall along the west coastline, just before it angles to the left (west) and changes from brick into cement.`,
    },
  ],
}
