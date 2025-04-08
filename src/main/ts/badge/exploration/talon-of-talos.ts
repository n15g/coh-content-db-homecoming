import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemTalosIsland } from '../../zone/mayhem-talos-island'

export const TalonOfTalos: BadgeData = {
  type: 'exploration',
  key: 'talon-of-talos',
  setTitleId: [560],
  name: 'Talon of Talos',
  morality: 'rogue-isles-access',
  badgeText: [
    { alignment: 'hero', value: 'You know all the possible places where criminals lurk to ambush people in Talos - knowledge that only someone from the other side could have.' },
    { alignment: 'villain', value: 'Back alleys in Talos Island like this one are perfect for waiting in ambush.' },
  ],
  notes: `Located in an alley between buildings, almost directly East of the entrance point.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Talon of Talos Badge', href: 'https://homecoming.wiki/wiki/Talon_of_Talos_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemTalosIsland.key, coords: [-1438, 160, 6877] }, vidiotMapKey: '1' },
  ],
}
