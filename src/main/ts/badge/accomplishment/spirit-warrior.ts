import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { CainRoyce } from '../../contact/cain-royce'
import { DrCheng } from '../../contact/dr-cheng'
import { OliverHaak } from '../../contact/oliver-haak'
import { PiperIrving } from '../../contact/piper-irving'
import { JosefKeller } from '../../contact/josef-keller'
import { AndreaMitchell } from '../../contact/andrea-mitchell'

export const SpiritWarrior: BadgeData = {
  type: 'accomplishment',
  key: 'spirit-warrior',
  setTitleId: [74],
  name: 'Spirit Warrior',
  morality: 'heroic',
  badgeText: 'You stopped a war between the Banished Pantheon and the Circle of Thorns.',
  acquisition: 'Complete the Stop both Groups of Mystic Madmen mission from Andrea Mitchell, Cain Royce, Dr. Cheng, Piper Irving, Oliver Haak, or Josef Keller.',
  notes: `Mission will not appear until level 22.
  
  To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Stop the Mystic Madmen" entry with number 0.15 in the 20-24 level range.`,
  links: [
    { title: 'Spirit Warrior Badge', href: 'https://homecoming.wiki/wiki/Spirit_Warrior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spirit-warrior.png',
  requirements: [
    {
      key: 'sbgomm', type: 'MISSION', missionName: 'Stop Both Groups of Mystic Madmen',
      contactKey: [CainRoyce.key, DrCheng.key, OliverHaak.key, PiperIrving.key, JosefKeller.key, AndreaMitchell.key],
    },
  ],
}
