import { BadgeData } from 'coh-content-db'
import { MarketCrashTrial } from '../../mission/market-crash-trial'

export const LoyalCustomer: BadgeData = {
  type: 'accomplishment',
  key: 'loyal-customer',
  setTitleId: [2369],
  name: 'Loyal Customer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have stopped the Sky Raiders from ransacking Wentworth's Fine Consignments.`,
  acquisition: 'Complete the Market Crash Task Force in Kallisti Wharf.',
  links: [
    { title: 'Loyal Customer Badge', href: 'https://homecoming.wiki/wiki/Loyal_Customer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/loyal-customer.png',
  requirements: [
    { key: MarketCrashTrial.key, type: 'mission', missionKey: MarketCrashTrial.key },
  ],
}
