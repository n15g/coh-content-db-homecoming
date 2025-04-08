import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const FaultlessMystic: BadgeData = {
  type: 'exploration',
  key: 'faultless-mystic',
  setTitleId: [120],
  name: 'Faultless Mystic',
  morality: 'paragon-city-access',
  badgeText: `Ley Lines are powerful forces of mystical energy that crisscross the planet. Paragon City's proximity to Ley Line crossings makes it a prime location for magical villain groups.`,
  notes: `Located approx. 173 yrds NNE of the "Precipice" marker in the crevice next to a burn out car.`,
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoFaultline.key, coords: [-843.6, -406.8, -715.2] }, vidiotMapKey: '2' },
  ],
}
