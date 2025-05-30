import { BadgeData } from 'coh-content-db'

export const DayTrader: BadgeData = {
  type: 'day-job',
  key: 'day-trader',
  setTitleId: [1039],
  name: [
    { alignment: 'hero', value: 'Day Trader' },
    { alignment: 'villain', value: 'Marketeer' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `Your time spent working at Wentworth's has earned you the Day Trader Day Job.
Logging out in Wentworth's will grant you a power that will allow you to teleport to an Auction House of your choice, when you log in.`,
    },
    {
      alignment: 'villain', value: `Your time spent supplying the Black Market has earned you the Marketeer Day Job.
Logging out near a Black Market will grant you a power that will allow you to teleport to a Black Market of your choice, when you log back in.`,
    },
  ],
  acquisition: 'Log out at a Consignment House for 100 hours.',
  links: [
    { title: 'Day Trader Badge', href: 'https://homecoming.wiki/wiki/Day_Trader_Badge' },
    { title: 'Marketeer Badge', href: 'https://homecoming.wiki/wiki/Marketeer_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/day-trader.png',
}
