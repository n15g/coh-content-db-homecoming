import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'

export const FueledByGreed: BadgeData = {
  type: 'exploration',
  key: 'fueled-by-greed',
  setTitleId: [2452],
  name: 'Fueled By Greed',
  releaseDate: '2025-06-17',
  morality: 'all',
  badgeText: `What started as Lou's Auto Shop was eventually bought by his brother-in-law, Manny, and turned into a full-service fuel station and repair shop. The station suffered a major fire in 1974, claiming Lou's life - Manny was investigated for insurance fraud and arson, and the station became eminent domain of the Wharf in 1997. When the Rikti attacked, plans for the station were sidelined and eventually lost entirely.`,
  links: [
    { title: 'Fueled By Greed Badge', href: 'https://homecoming.wiki/wiki/Fueled_By_Greed_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [1562.5, 42, 5176.1], icon: 'badge', iconText: '4' } },
  ],
}
