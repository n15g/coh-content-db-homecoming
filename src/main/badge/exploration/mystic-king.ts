import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const MysticKing: BadgeData = {
  type: 'exploration',
  key: 'mystic-king',
  setTitleId: [98],
  name: [
    { sex: 'M', value: 'Mystic King' },
    { sex: 'F', value: 'Mystic Queen' },
  ],
  morality: 'heroic',
  zoneKey: KingsRow.key,
  loc: [-376, 70, 245],
  badgeText: `Ley Lines are powerful forces of mystical energy that crisscross the planet. Where they meet is called a nexus, and all magic is stronger for miles around.`,
  notes: 'Located on a rooftop in the SW part of the Gish neighborhood, 144 yards NNW of the Pocket D entrance.',
  links: [
    { title: 'Mystic King Badge', href: 'https://homecoming.wiki/wiki/Mystic_King_Badge' },
    { title: 'Mystic Queen Badge', href: 'https://homecoming.wiki/wiki/Mystic_Queen_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '3',
}
