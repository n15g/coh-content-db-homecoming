import { BadgeData } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const BrokenMind: BadgeData = {
  type: 'exploration',
  key: 'broken-mind',
  setTitleId: [1645],
  name: 'Broken Mind',
  morality: 'all',
  badgeText: `Deep beneath the Mother of Mercy Hospital, the moans of misbegotten Seers echo through these forgotten corridors.
Their sorrow seeps into the minds of those who hear them, disrupting thought and disturbing the emotions. Tarry too long and your mind shall be broken as theirs.`,
  notes: `Located in the set of hallways furthest south, just north of the middle dead end.`,
  links: [
    { title: 'Broken Mind Badge', href: 'https://homecoming.wiki/wiki/Broken_Mind_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundImperial.key, coords: [-1439, 336, 1713] }, vidiotMapKey: '1' },
  ],
}
