import { BadgeData, mapLink } from 'coh-content-db'
import { TheStormPalace } from '../../map/the-storm-palace'

export const EveOfDestruction: BadgeData = {
  type: 'EXPLORATION',
  key: 'eve-of-destruction',
  setTitle: { id: 1860 },
  name: [{ value: 'Eve of Destruction' }],
  alignment: ['H'],
  mapKey: TheStormPalace.key,
  loc: [-2947, 2187, 270],
  badgeText: [{
    value: `Your destiny on the Shadow Shard is drawing very close.
Everything you have experienced so far has been building to this point.
You have suffered countless indignities, have had your body and mind abused and violated and the time of reckoning is here.
Rularuu is a being who consumes and destroys and now you shall show him that such talents are not his alone.`,
  }],
  notes: `Located in ${mapLink(TheStormPalace)} 78 yards west of the Lock of Destruction marker, in a small passage between rocks.`,
  links: [
    { title: 'Eve of Destruction Badge', href: 'https://homecoming.wiki/wiki/Eve_of_Destruction_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
