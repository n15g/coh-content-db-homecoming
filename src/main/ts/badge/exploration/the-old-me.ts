import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const TheOldMe: BadgeData = {
  type: 'exploration',
  key: 'the-old-me',
  setTitleId: [1547],
  name: 'The Old Me',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This area is where the real Ajax was buried, after being killed by the thug Ralph Valetti, who stole his identity as well as his powers.
After the revelation was made, officials rushed to recover Ajax's body, which is now preserved in an unknown area within the city.`,
  notes: `Located 73 yards west of the Circe Island neighborhood marker, on the southwestern shore of the beach.`,
  links: [
    { title: 'The Old Me Badge', href: 'https://homecoming.wiki/wiki/The_Old_Me_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TalosIsland.key, coords: [-1184, 7, 2132], icon: 'badge', iconText: '5' } },
  ],
}
