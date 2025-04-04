import { BadgeData } from 'coh-content-db'
import { TheStormPalace } from '../../zone/the-storm-palace'

export const EveOfDestruction: BadgeData = {
  type: 'exploration',
  key: 'eve-of-destruction',
  setTitleId: [1860],
  name: 'Eve of Destruction',
  morality: 'heroic',
  zoneKey: TheStormPalace.key,
  loc: [-2947, 2187, 270],
  badgeText: `Your destiny on the Shadow Shard is drawing very close.
Everything you have experienced so far has been building to this point.
You have suffered countless indignities, have had your body and mind abused and violated and the time of reckoning is here.
Rularuu is a being who consumes and destroys and now you shall show him that such talents are not his alone.`,
  notes: `Located 78 yards west of the Lock of Destruction marker, in a small passage between rocks.`,
  links: [
    { title: 'Eve of Destruction Badge', href: 'https://homecoming.wiki/wiki/Eve_of_Destruction_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '7',
}
