import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemTalosIsland } from '../../map/mayhem-talos-island'

export const TalonOfTalos: BadgeData = {
  type: 'EXPLORATION',
  key: 'talon-of-talos',
  setTitle: { id: 560 },
  name: [{ value: 'Talon of Talos' }],
  alignment: ['V'],
  mapKey: MayhemTalosIsland.key,
  badgeText: [{
    alignment: 'H', value: 'You know all the possible places where criminals lurk to ambush people in Talos - knowledge that only someone from the other side could have.',
  }, {
    alignment: 'V', value: 'Back alleys in Talos Island like this one are perfect for waiting in ambush.',
  }],
  loc: [-1438, 160, 6877],
  notes: 'Located in an alley between buildings, almost directly East of the entrance point.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Talon of Talos Badge', href: 'https://homecoming.wiki/wiki/Talon of_Talos_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
