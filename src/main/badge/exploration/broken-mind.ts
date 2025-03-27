import { BadgeData, mapLink } from 'coh-content-db'
import { UndergroundImperial } from '../../map/underground-imperial'

export const BrokenMind: BadgeData = {
  type: 'EXPLORATION',
  key: 'broken-mind',
  setTitle: { id: 1645 },
  name: [{ value: 'Broken Mind' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundImperial.key,
  loc: [-1439, 336, 1713],
  badgeText: [{
    value: 'Deep beneath the Mother of Mercy Hospital, the moans of misbegotten Seers echo through these forgotten corridors.'
      + ' Their sorrow seeps into the minds of those who hear them, disrupting thought and disturbing the emotions.'
      + ' Tarry too long and your mind shall be broken as theirs.',
  }],
  notes: `Located in ${mapLink(UndergroundImperial)} in the set of hallways furthest south, just north of the middle dead end.`,
  links: [
    { title: 'Broken Mind Badge', href: 'https://homecoming.wiki/wiki/Broken_Mind_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '1',
}
