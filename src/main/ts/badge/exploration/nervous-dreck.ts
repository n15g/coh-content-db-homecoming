import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const NervousDreck: BadgeData = {
  type: 'exploration',
  key: 'nervous-dreck',
  setTitleId: [133],
  name: 'Nervous Dreck',
  morality: 'paragon-city-access',
  badgeText: `Dreck, the leader of the Freakshow, was brought to justice on this spot by Statesman. His time in jail was short, however, as he broke out just two weeks later.`,
  notes: `Located in the Raysun Petroleum neighborhood, along the west war wall near a dumpster on the ground, west and slightly south of the Coroman Manufacturing marker.`,
  links: [
    { title: 'Nervous Dreck Badge', href: 'https://homecoming.wiki/wiki/Nervous_Dreck_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TerraVolta.key, coords: [4456, 0, -6124] }, vidiotMapKey: '3' },
  ],
}
