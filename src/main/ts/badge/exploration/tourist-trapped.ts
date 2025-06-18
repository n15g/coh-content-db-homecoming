import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'

export const TouristTrapped: BadgeData = {
  type: 'exploration',
  key: 'tourist-trapped',
  setTitleId: [2456],
  name: 'Tourist Trapped',
  releaseDate: '2025-06-17',
  morality: 'all',
  badgeText: `Many who visit the Wharf take a paddle boat out to Turtle Rock Island as a "must see" location. Known for its curious rock formations, incredible views of the Wharf, and the once-a-day alignment of One Statesman Tower with the rising sun, tourists end up here taking photos more than any other place in the Wharf.`,
  links: [
    { title: 'Tourist Trapped Badge', href: 'https://homecoming.wiki/wiki/Tourist_Trapped_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [5339.4, 72.1, 738.7], icon: 'badge', iconText: '8' } },
  ],
}
