import { MissionData } from 'coh-content-db'
import { Levantera } from '../contact/levantera'

export const WelcomeToVanguard: MissionData = {
  key: 'welcome-to-vanguard',
  name: 'Welcome to Vanguard',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: Levantera.key,
  levelRange: [35],
  links: [
    { title: 'Welcome to Vanguard', href: 'https://homecoming.wiki/wiki/Levantera#Welcome_to_Vanguard_(35-50)' },
  ],
}
