import { BadgeData } from 'coh-content-db'

export const ShopKeeper: BadgeData = {
  type: 'day-job',
  key: 'shop-keeper',
  setTitleId: [1031],
  name: [
    { alignment: 'hero', value: 'Shop Keeper' },
    { alignment: 'villain', value: 'Price Gouger' },
  ],
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `You have spent your free time running a shop in Paragon City selling various wares earning you the Shop Keeper Day Job.
Logging out in a store will earn you a random enhancement, upon each mission completion, for a short time.`,
    },
    {
      alignment: 'villain', value: `You know better than to work retail in the Rogue Isles.
Logging out in a store will earn you a random enhancement, upon each mission completion, for a short time.`,
    },
  ],
  acquisition: 'Log out inside Stores for 100 hours.',
  links: [
    { title: 'Shop Keeper Badge', href: 'https://homecoming.wiki/wiki/Shop_Keeper_Badge' },
    { title: 'Price Gouger Badge', href: 'https://homecoming.wiki/wiki/Price_Gouger_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/shop-keeper.png',
}
