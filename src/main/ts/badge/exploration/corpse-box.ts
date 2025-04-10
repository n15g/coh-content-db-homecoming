import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const CorpseBox: BadgeData = {
  type: 'exploration',
  key: 'corpse-box',
  setTitleId: [1780],
  name: 'Corpse Box',
  morality: 'paragon-city-access',
  badgeText: `The stench of death clings to this forlorn cargo container.
The Vahzilok are rumored to store corpses there for later use in their blasphemous experiments.
It is difficult to argue what is more horrific: a cargo container stuffed with dead bodies, or one that is empty—indicating that the Vahizilok
have a new crop of cadaverous servitors roaming the streets to do their dark bidding.`,
  notes: 'Located in a cargo crate in the extreme northeast corner of the map.',
  links: [
    { title: 'Corpse Box Badge', href: 'https://homecoming.wiki/wiki/Corpse_Box_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Boomtown.key, coords: [-4516, 1, -1262], icon: 'badge', iconText: '8' } },
  ],
}
