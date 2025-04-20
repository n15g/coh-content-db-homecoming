import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const ClaimDenied: BadgeData = {
  type: 'exploration',
  key: 'claim-denied',
  setTitleId: [2401],
  name: 'Claim Denied',
  releaseDate: '2019-06-01',
  morality: 'paragon-city-access',
  badgeText: `The owner of this building tried to claim he lost the structure due to a fault line, but the insurance company was uncompromising in its definition of an event versus an individual.`,
  notes: 'Located approx. 360 yds S from the "Aftershock" marker in the canyon on top of a half buried building.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoFaultline.key, coords: [350.8, -667.6, 198.1], icon: 'badge', iconText: '6' } },
  ],
}
