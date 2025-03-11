import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../map/echo-faultline'

export const ClaimDenied: BadgeData = {
  type: 'EXPLORATION',
  key: 'claim-denied',
  setTitle: { id: 2401 },
  name: [{ value: 'Claim Denied' }],
  alignment: ['H'],
  badgeText: [{ value: `The owner of this building tried to claim he lost the structure due to a fault line, but the insurance company was uncompromising in its definition of an event versus an individual.` }],
  mapKey: EchoFaultline.key,
  loc: [350.8, -667.6, 198.1],
  notes: 'Approx. 360 yds S from the "Aftershock" marker in the canyon on top of a half buried building.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '6',
}
