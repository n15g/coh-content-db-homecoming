import { BadgeData } from 'coh-content-db'
import { DimensionalExplorer } from '../day-job/dimensional-explorer'
import { Commuter } from '../day-job/commuter'

export const Traveler: BadgeData = {
  type: 'accolade',
  key: 'traveler',
  setTitleId: [1064],
  name: [
    { alignment: 'hero', value: 'Traveler' },
    { alignment: 'villain', value: 'Border Crosser' },
  ],
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `Your travels around both Paragon City and the Shadow Shard have become a full time job for you and have earned you the title of Traveler.
While logged out in either a Train Station or the Shadow Shard you will earn fuel for your Traveler's Jet Pack at an accelerated rate.`,
    },
    { alignment: 'villain', value: `You've made a breakthrough in getting to new places, heading all the way to the Rogue Isles for more travel opportunities.` },
  ],
  links: [
    { title: 'Traveler Badge', href: 'https://homecoming.wiki/wiki/Traveler_Badge' },
    { title: 'Border Crosser Badge', href: 'https://homecoming.wiki/wiki/Border_Crosser_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/traveler.png',
  requirements: [
    { key: DimensionalExplorer.key, type: 'badge', badgeKey: DimensionalExplorer.key },
    { key: Commuter.key, type: 'badge', badgeKey: Commuter.key },
  ],
}
