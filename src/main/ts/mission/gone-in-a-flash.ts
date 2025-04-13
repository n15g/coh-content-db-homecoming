import { MissionData } from 'coh-content-db'
import { BobbyCurtin } from '../contact/bobby-curtin'

export const GoneInAFlash: MissionData = {
  key: 'gone-in-a-flash',
  name: 'Gone in a Flash',
  type: 'story-arc',
  morality: 'rogue',
  contactKeys: BobbyCurtin.key,
  levelRange: [25, 29],
  links: [
    { title: 'Gone in a Flash', href: 'https://homecoming.wiki/wiki/Bobby_Curtin#Gone_in_a_Flash' },
  ],
  flashback: {
    id: '26.02',
    levelRange: [25, 29],
  },
}
