import { BadgeData, zoneLink } from 'coh-content-db'
import { SewerNetwork } from '../../zone/sewer-network'
import { SteelCanyon } from '../../zone/steel-canyon'
import { Boomtown } from '../../zone/boomtown'

export const SeekerOfTheLost: BadgeData = {
  type: 'EXPLORATION',
  key: 'seeker-of-the-lost',
  setTitle: { id: 1836 },
  name: [{ value: 'Seeker of the Lost' }],
  alignment: ['H'],
  zoneKey: SewerNetwork.key,
  loc: [576, -576, -1537],
  badgeText: [{
    value: `
Reviled. Spat upon. Shunned by the 'norms,' the Lost are truly a pitiable breed.
Were it not for their great hostility or their powerful salvaged Rikti weapons, you could even feel sympathy for them.
Your campaign against them serves the purpose of thwarting their more dangerous plans while also acting as a disincentive for those among their ranks whose loyalty may be wavering.
If your attacks can convince even a small number to quit and seek out legitimate help, then you've done your job.`,
  }],
  notes: `On the map, the badge is roughly equidistant from the ${zoneLink(SteelCanyon)} Sector, ${zoneLink(Boomtown)} Sector and Underworld markers.
It is in the middle of the junction connecting those three neighborhoods.`,
  links: [
    { title: 'Seeker of the Lost Badge', href: 'https://homecoming.wiki/wiki/Seeker_of_the_Lost_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
