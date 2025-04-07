import { BadgeData, zoneLink } from 'coh-content-db'
import { SewerNetwork } from '../../zone/sewer-network'
import { KingsRow } from '../../zone/kings-row'

export const SewerKing: BadgeData = {
  type: 'exploration',
  key: 'sewer-king',
  setTitleId: [1832],
  name: [
    { sex: 'M', value: 'Sewer King' },
    { sex: 'F', value: 'Sewer Queen' },
  ],
  morality: 'heroic',
  zoneKey: SewerNetwork.key,
  loc: [2624, 0, 2176],
  badgeText: `
By now you've walked so much of the Sewer Network that you know these winding corridors like the back of your hand.
You know its moods and its cycles.
Its odors are no longer offensive as they can offer you a wealth of information relating to the network's health and who is currently stalking through its halls.
The thugs and beasts who call this place home know to fear you, for you are a force to be reckoned with.`,
  notes: `Located in ${zoneLink(SewerNetwork)} 50 yards east of the ${zoneLink(KingsRow)} transfer point, on the path leading into the sewers.`,
  links: [
    { title: 'Sewer King Badge', href: 'https://homecoming.wiki/wiki/Sewer_King_Badge' },
    { title: 'Sewer Queen Badge', href: 'https://homecoming.wiki/wiki/Sewer_Queen_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '4',
}
