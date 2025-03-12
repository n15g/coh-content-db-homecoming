import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../map/terra-volta'

export const NervousDreck: BadgeData = {
  type: 'EXPLORATION',
  key: 'nervous-dreck',
  setTitle: { id: 133 },
  name: [{ value: 'Nervous Dreck' }],
  alignment: ['H'],
  mapKey: TerraVolta.key,
  loc: [4456, 0, -6124],
  badgeText: [{
    value: `Dreck, the leader of the Freakshow, was brought to justice on this spot by Statesman. His time in jail was short, however, as he broke out just two weeks later.`,
  }],
  notes: `Located in the Raysun Petroleum neighborhood of Terra Volta.

It can be found along the west war wall near a dumpster on the ground, west and slightly south of the Coroman Manufacturing marker.`,
  links: [
    { title: 'Nervous Dreck Badge', href: 'https://homecoming.wiki/wiki/Nervous_Dreck_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
