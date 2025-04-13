import { MissionData } from 'coh-content-db'
import { AdaWellington } from '../contact/ada-wellington'

export const MarketCrashTrial: MissionData = {
  key: 'market-crash-trial',
  name: 'Market Crash Trial',
  type: 'trial',
  morality: 'primal',
  contactKeys: AdaWellington.key,
  levelRange: [40],
  links: [
    { title: 'Market Crash Trial', href: 'https://homecoming.wiki/wiki/Market_Crash_Trial' },
  ],
}
