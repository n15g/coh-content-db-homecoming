import { BadgeData } from 'coh-content-db'
import { DayTrader } from '../day-job/day-trader'
import { Gunrunner } from '../day-job/gunrunner'

export const BlockadeRunner: BadgeData = {
  type: 'accolade',
  key: 'blockade-runner',
  setTitleId: [1079],
  name: [
    { alignment: 'hero', value: 'Blockade Runner' },
    { alignment: 'villain', value: 'Profiteer' },
  ],
  morality: 'villainous',
  badgeText: [
    {
      alignment: 'hero', value: `Your skills at circumventing trade restrictions and finding profit are handy in Paragon City.
Recently it seems many have managed to run the blockade from the Rogue Isles, turning those restrictions into a paper tiger.`,
    },
    {
      alignment: 'villain', value: `Your masterful knowledge of the Black Market coupled with knowing where to get the best merchandise has made you a master of the Black Market.
While logged out near Docks or near the Black Market you will earn tokens that will grant you discount when crafting inventions.`,
    },
  ],
  links: [
    { title: 'Blockade Runner Badge', href: 'https://homecoming.wiki/wiki/Blockade_Runner_Badge' },
    { title: 'Profiteer Badge', href: 'https://homecoming.wiki/wiki/Profiteer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/entrepreneur.png',
  requirements: [
    { key: DayTrader.key, type: 'badge', badgeKey: DayTrader.key },
    { key: Gunrunner.key, type: 'badge', badgeKey: Gunrunner.key },
  ],
}
