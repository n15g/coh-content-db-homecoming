import { MissionData } from 'coh-content-db'
import { AshleyMcKnight } from '../contact/ashley-mcknight'

export const MidnightsHand: MissionData = {
  key: 'midnights-hand',
  name: `Midnight's Hand`,
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: AshleyMcKnight.key,
  levelRange: [30],
  links: [
    { title: `Midnight's Hand`, href: `https://homecoming.wiki/wiki/Ashley_McKnight#Midnight's_Hand_(30-50)` },
  ],
  flashback: {
    id: '12.04',
    levelRange: [50],
  },
}
