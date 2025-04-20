import { BadgeData } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'

export const Fugitive: BadgeData = {
  type: 'exploration',
  key: 'fugitive',
  setTitleId: [1566],
  name: 'Fugitive',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `When a fugitive escapes from the Zig, this area is the first place that the PPD patrol.
The Freakshow frequently make deals with inmates - they'll hold off the PPD if the escapees join the Freakshow.
This either leads to the Freakshow increasing their ranks or hunting down the fugitives who break their end of the bargain.`,
  notes: `Located at the north entrance of the Dark Waters neighborhood, 196 yards north of the neighborhood marker.`,
  links: [
    { title: 'Fugitive Badge', href: 'https://homecoming.wiki/wiki/Fugitive_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Brickstown.key, coords: [-3821, -47, -181], icon: 'badge', iconText: '4' } },
  ],
}
