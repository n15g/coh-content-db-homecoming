import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemBrickstown } from '../../zone/mayhem-brickstown'

export const Brickhouse: BadgeData = {
  type: 'EXPLORATION',
  key: 'brickhouse',
  setTitle: { id: 561 },
  name: [{ value: 'Brickhouse' }],
  alignment: ['V'],
  zoneKey: MayhemBrickstown.key,
  badgeText: [{
    value: 'You have discovered an underground safe in Brickstown kept right under the noses of the PPD.',
  }],
  loc: [-161, 0, -147],
  notes: 'Located in an alley behind the Paragon Police Station.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Brickhouse Badge', href: 'https://homecoming.wiki/wiki/Brickhouse_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
