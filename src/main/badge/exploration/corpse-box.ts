import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../map/boomtown'

export const CorpseBox: BadgeData = {
  type: 'EXPLORATION',
  key: 'corpse-box',
  setTitle: { id: 1780 },
  name: [{ value: 'Corpse Box' }],
  alignment: ['H'],
  mapKey: Boomtown.key,
  loc: [-4516, 1, -1262],
  badgeText: [{
    value: 'The stench of death clings to this forlorn cargo container. The Vahzilok are rumored to store corpses there for later use in their blasphemous experiments.'
      + ' It is difficult to argue what is more horrific: a cargo container stuffed with dead bodies, or one that is empty—indicating that the Vahizilok have a new crop of cadaverous'
      + ' servitors roaming the streets to do their dark bidding.',
  }],
  notes: 'This badge is in a cargo crate in the extreme northeast corner of the map.',
  links: [
    { title: 'Corpse Box Badge', href: 'https://homecoming.wiki/wiki/Corpse_Box_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
