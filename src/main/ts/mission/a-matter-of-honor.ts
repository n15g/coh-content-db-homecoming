import { MissionData } from 'coh-content-db'
import { SirBedwyr } from '../contact/sir-bedwyr'

export const AMatterOfHonor: MissionData = {
  key: 'a-matter-of-honor',
  name: 'A Matter of Honor',
  type: 'story-arc',
  morality: 'all',
  contactKeys: SirBedwyr.key,
  levelRange: [30, 39],
  links: [
    { title: 'A Matter of Honor', href: 'https://homecoming.wiki/wiki/Sir_Bedwyr#A_Matter_of_Honor' },
  ],
  flashback: {
    id: '23.04',
    levelRange: [35, 39],
  },
}
