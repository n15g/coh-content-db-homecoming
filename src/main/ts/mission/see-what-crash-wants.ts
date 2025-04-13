import { MissionData } from 'coh-content-db'
import { VinceDubrowski } from '../contact/vince-dubrowski'

export const SeeWhatCrashWants: MissionData = {
  key: 'see-what-crash-wants',
  name: 'See what Crash wants',
  type: 'mission',
  morality: 'villainous',
  contactKeys: VinceDubrowski.key,
  levelRange: [20, 24],
  links: [
    { title: 'See what Crash wants', href: 'https://homecoming.wiki/wiki/Vince_Dubrowski#See_what_Crash_wants' },
  ],
  flashback: {
    id: '6.32',
    name: `Retrieve Crash's Shipment`,
    levelRange: [20, 24],
  },
}
