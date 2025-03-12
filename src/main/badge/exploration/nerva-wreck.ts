import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../map/nerva-archipelago'

export const NervaWreck: BadgeData = {
  type: 'EXPLORATION',
  key: 'nerva-wreck',
  setTitle: { id: 276 },
  name: [{ value: 'Nerva Wreck' }],
  alignment: ['V'],
  mapKey: NervaArchipelago.key,
  loc: [1388, 10, 2876],
  badgeText: [{
    value: `You have visited the famous Nerva Wreck. What strange creature might have caused this disaster?`,
  }],
  notes: `Located in [map:${NervaArchipelago.key}], in the Primeva neighborhood.

It is located on the lowest rock outcropping next to the shipwreck in the mouth of the river that runs into the largest island of Primeva.
 It is approximately 533 yrds SE of the Primeva marker and/or the northernmost Quartermaster.`,
  links: [
    { title: 'Nerva Wreck Badge', href: 'https://homecoming.wiki/wiki/Nerva_Wreck_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '3',
}
