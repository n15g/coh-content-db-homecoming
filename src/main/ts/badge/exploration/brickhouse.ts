import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemBrickstown } from '../../zone/mayhem-brickstown'

export const Brickhouse: BadgeData = {
  type: 'exploration',
  key: 'brickhouse',
  setTitleId: [561],
  name: 'Brickhouse',
  morality: 'rogue-isles-access',
  badgeText: `You have discovered an underground safe in Brickstown kept right under the noses of the PPD.`,
  notes: `Located in an alley behind the Paragon Police Station.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Brickhouse Badge', href: 'https://homecoming.wiki/wiki/Brickhouse_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemBrickstown.key, coords: [-161, 0, -147], icon: 'badge', iconText: '1' } },
  ],
}
