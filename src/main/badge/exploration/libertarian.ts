import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemFoundersFalls } from '../../zone/mayhem-founders-falls'

export const Libertarian: BadgeData = {
  type: 'exploration',
  key: 'libertarian',
  setTitleId: [562],
  name: [
    { alignment: 'hero', value: 'Libertarian' },
    { alignment: 'villain', value: 'Anarchist' },
  ],
  morality: 'villainous',
  zoneKey: MayhemFoundersFalls.key,
  badgeText: 'It is here that the Devouring Earth nearly set off a biological bomb to infect the citizens of Founder\'s Falls.',
  loc: [-3802, 4, 2687],
  notes: `Located under the edge of a fountain, approximately 140 yards east of the bank.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: 'Libertarian Badge', href: 'https://homecoming.wiki/wiki/Libertarian_Badge' },
    { title: 'Anarchist Badge', href: 'https://homecoming.wiki/wiki/Anarchist_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '1',
}
