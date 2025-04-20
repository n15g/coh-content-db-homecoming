import { BadgeData, zoneLink } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'
import { TalosIsland } from '../../zone/talos-island'

export const LeftBehind: BadgeData = {
  type: 'exploration',
  key: 'left-behind',
  setTitleId: [1537],
  name: 'Left Behind',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Before the Rikti War, the Red Tiger, Jake Montoya, used this area to train fellow heroes. The people of Paragon would gather on the weekends to watch the exciting 'Hide Park Sparring Sessions'. After his mandatory retirement, the sparring sessions stopped all together.`,
  notes: `Located in the Hide Park neighborhood, in the middle of a small courtyard 238 yards west of the ${zoneLink(TalosIsland)} zone connection.`,
  links: [
    { title: 'Left Behind Badge', href: 'https://homecoming.wiki/wiki/Left_Behind_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SkywayCity.key, coords: [-1216, 4, -2368], icon: 'badge', iconText: '7' } },
  ],
}
