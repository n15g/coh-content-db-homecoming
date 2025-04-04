import { BadgeData } from 'coh-content-db'
import { DayTrader } from '../day-job/day-trader'
import { ShopKeeper } from '../day-job/shop-keeper'

export const Entrepreneur: BadgeData = {
  type: 'accolade',
  key: 'entrepreneur',
  setTitleId: [1065],
  name: [
    { alignment: 'hero', value: 'Entrepreneur' },
    { alignment: 'villain', value: 'Free Trade Advocate' },
  ],
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `Your masterful knowledge of the Auction House combined with a great head for business has made you a very successful Entrepreneur.
While logged out at either Wentworth's or inside a Shop you will earn tokens that will grant you discount when crafting inventions.`,
    },
    {
      alignment: 'villain', value: `Your studies of business theory and practice have driven you to press for free trade between the Rogue Isles and Paragon City.
On the surface, your efforts appear fruitless, but there are shadowy rumors they have had an effect...`,
    },
  ],
  links: [
    { title: 'Entrepreneur Badge', href: 'https://homecoming.wiki/wiki/Entrepreneur_Badge' },
    { title: 'Free Trade Advocate Badge', href: 'https://homecoming.wiki/wiki/Free_Trade_Advocate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/entrepreneur.png',
  requirements: [
    { key: DayTrader.key, type: 'badge', badgeKey: DayTrader.key },
    { key: ShopKeeper.key, type: 'badge', badgeKey: ShopKeeper.key },
  ],
}
