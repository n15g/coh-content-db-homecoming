import { BadgeData } from 'coh-content-db'
import { DarkFiend } from '../event/dark-fiend'
import { HellHathNoFury } from '../event/hell-hath-no-fury'
import { Terror } from '../event/terror'
import { MonsterMasher } from '../event/monster-masher'
import { Monstrous } from '../event/monstrous'

export const HellAndBack: BadgeData = {
  type: 'ACCOLADE',
  key: 'hell-and-back',
  setTitle: { id: 1372 },
  name: [
    { value: 'Hell and Back' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've endured the spells of witches, the might of misshapen abominations, the ghostly touch of spectral terrors and the schemes of the supernatural fiends, earning yourself this Accolade.` },
  ],
  notes: `Available during Halloween Events`,
  links: [
    { title: 'Hell and Back Badge', href: 'https://homecoming.wiki/wiki/Hell_and_Back_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hell-and-back.png' },
  ],
  requirements: [[
    { key: DarkFiend.key, type: 'BADGE', badgeKey: DarkFiend.key },
    { key: HellHathNoFury.key, type: 'BADGE', badgeKey: HellHathNoFury.key },
    { key: Terror.key, type: 'BADGE', badgeKey: Terror.key },
    { key: MonsterMasher.key, type: 'BADGE', badgeKey: MonsterMasher.key },
    { key: Monstrous.key, type: 'BADGE', badgeKey: Monstrous.key },
  ]],
}
