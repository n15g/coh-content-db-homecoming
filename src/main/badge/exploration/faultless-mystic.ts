import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../map/echo-faultline'

export const FaultlessMystic: BadgeData = {
  type: 'EXPLORATION',
  key: 'faultless-mystic',
  setTitle: { id: 120 },
  name: [{ value: 'Faultless Mystic' }],
  alignment: ['H'],
  badgeText: [{ value: `Ley Lines are powerful forces of mystical energy that crisscross the planet. Paragon City's proximity to Ley Line crossings makes it a prime location for magical villain groups.` }],
  mapKey: EchoFaultline.key,
  loc: [-843.6, -406.8, -715.2],
  notes: '**Moved from [map:faultline] in Issue 25.**\n'
    + '\n'
    + 'Approx. 173 yrds NNE of the "Precipice" marker in the crevice next to a burn out car.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '2',
}
