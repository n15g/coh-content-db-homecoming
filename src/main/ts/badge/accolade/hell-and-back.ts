import { BadgeData } from 'coh-content-db'
import { DarkFiend } from '../event/dark-fiend'
import { HellHathNoFury } from '../event/hell-hath-no-fury'
import { Terror } from '../event/terror'
import { MonsterMasher } from '../event/monster-masher'
import { Monstrous } from '../event/monstrous'

export const HellAndBack: BadgeData = {
  type: 'accolade',
  key: 'hell-and-back',
  setTitleId: [1372],
  name: 'Hell and Back',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've endured the spells of witches, the might of misshapen abominations, the ghostly touch of spectral terrors and the schemes of the supernatural fiends, earning yourself this Accolade.`,
  notes: `Available during Halloween events.`,
  links: [
    { title: 'Hell and Back Badge', href: 'https://homecoming.wiki/wiki/Hell_and_Back_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hell-and-back.png',
  requirements: [
    { key: DarkFiend.key, type: 'badge', badgeKey: DarkFiend.key },
    { key: HellHathNoFury.key, type: 'badge', badgeKey: HellHathNoFury.key },
    { key: Terror.key, type: 'badge', badgeKey: Terror.key },
    { key: MonsterMasher.key, type: 'badge', badgeKey: MonsterMasher.key },
    { key: Monstrous.key, type: 'badge', badgeKey: Monstrous.key },
  ],
}
