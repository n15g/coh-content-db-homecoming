import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'

export const EggHunter: BadgeData = {
  type: 'EXPLORATION',
  key: 'egg-hunter',
  setTitle: { id: 639 },
  name: [{ value: 'Egg Hunter' }],
  alignment: ['H'],
  zoneKey: Faultline.key,
  loc: [-908, -183, 109],
  badgeText: [{ value: 'Perseverance and downright determination brought you this badge. Only the most devout egg hunters will find this spot. Lucky you.' }],
  notes: 'The Egg Hunter Badge is inside a small room under Freight Lift C in ${zoneLink(Faultline)}.\n'
    + '\n'
    + '1. take Freight Lift C to the bottom. When exiting the lift, you will be facing south.\n'
    + '2. Walk down the east-facing ramp at the bottom of Freight Lift C.\n'
    + '3. Once at the bottom of the ramp, stand in front of the large spool of wire.\n'
    + '4. Walk directly north under the ramp all the way to the wall.\n'
    + '5. Turn directly west and there is a very narrow opening behind the boxes under the ramp.\n'
    + '6. Walk forward and a small doorway is on the north side, opening into a room with a Cryptic Lounge sign on the wall.\n'
    + '7. The badge is in the middle of that room.',
  links: [
    { title: 'Egg Hunter Badge', href: 'https://homecoming.wiki/wiki/Egg_Hunter_Badge' },
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '8',
}
