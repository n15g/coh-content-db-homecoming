import { MissionData } from 'coh-content-db'
import { AshleyMcKnight } from '../contact/ashley-mcknight'
import { PercyWinkley } from '../contact/percy-winkley'

export const TheOriginOfPower: MissionData = {
  key: 'the-origin-of-power',
  name: 'The Origin of Power',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: [PercyWinkley.key, AshleyMcKnight.key],
  levelRange: [14],
  links: [
    { title: 'The Origin of Power (Percy Winkley)', href: 'https://homecoming.wiki/wiki/Percy_Winkley#The_Origin_of_Power_(30-50)' },
    { title: 'The Origin of Power (Ashley McKnight)', href: 'https://homecoming.wiki/wiki/Ashley_McKnight#The_Origin_of_Power_(14-50)' },
  ],
  flashback: {
    id: '12.02',
    levelRange: [50],
  },
}
