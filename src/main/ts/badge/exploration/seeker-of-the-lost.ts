import { BadgeData, zoneLink } from 'coh-content-db'
import { SewerNetwork } from '../../zone/sewer-network'
import { SteelCanyon } from '../../zone/steel-canyon'
import { Boomtown } from '../../zone/boomtown'

export const SeekerOfTheLost: BadgeData = {
  type: 'exploration',
  key: 'seeker-of-the-lost',
  setTitleId: [1836],
  name: 'Seeker of the Lost',
  morality: 'paragon-city-access',
  badgeText: `
Reviled. Spat upon. Shunned by the 'norms,' the Lost are truly a pitiable breed.
Were it not for their great hostility or their powerful salvaged Rikti weapons, you could even feel sympathy for them.
Your campaign against them serves the purpose of thwarting their more dangerous plans while also acting as a disincentive for those among their ranks whose loyalty may be wavering.
If your attacks can convince even a small number to quit and seek out legitimate help, then you've done your job.`,
  notes: `On the map, the badge is roughly equidistant from the ${zoneLink(SteelCanyon)} Sector, ${zoneLink(Boomtown)} Sector and Underworld markers,
in the middle of the junction connecting those three neighborhoods.`,
  links: [
    { title: 'Seeker of the Lost Badge', href: 'https://homecoming.wiki/wiki/Seeker_of_the_Lost_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SewerNetwork.key, coords: [576, -576, -1537] }, vidiotMapKey: '8' },
  ],
}
