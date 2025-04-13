import { MissionData } from 'coh-content-db'
import { CainRoyce } from '../contact/cain-royce'
import { DrCheng } from '../contact/dr-cheng'
import { OliverHaak } from '../contact/oliver-haak'
import { PiperIrving } from '../contact/piper-irving'
import { JosefKeller } from '../contact/josef-keller'
import { AndreaMitchell } from '../contact/andrea-mitchell'

export const StopBothGroupsOfMysticMadmen: MissionData = {
  key: 'stop-both-groups-of-mystic-madmen',
  name: 'Stop both groups of mystic madmen',
  type: 'mission',
  morality: 'heroic',
  contactKeys: [CainRoyce.key, DrCheng.key, OliverHaak.key, PiperIrving.key, JosefKeller.key, AndreaMitchell.key],
  levelRange: [20, 24],
  links: [
    { title: '(Cain Royce) Stop both groups of mystic madmen', href: 'https://homecoming.wiki/wiki/Cain_Royce#Stop_both_groups_of_mystic_madmen_(20-24)' },
    { title: '(Dr. Cheng) Stop both groups of mystic madmen', href: 'https://homecoming.wiki/wiki/Dr._Cheng#Stop_both_groups_of_mystic_madmen_(20-24)' },
    { title: '(Oliver Haak) Stop both groups of mystic madmen', href: 'https://homecoming.wiki/wiki/Oliver_Haak#Stop_both_groups_of_mystic_madmen_(20-24)' },
    { title: '(Piper Irving) Stop both groups of mystic madmen', href: 'https://homecoming.wiki/wiki/Piper_Irving#Stop_both_groups_of_mystic_madmen_(20-24)' },
    { title: '(Josef Keller) Stop both groups of mystic madmen', href: 'https://homecoming.wiki/wiki/Josef_Keller#Stop_both_groups_of_mystic_madmen_(20-24)' },
    { title: '(Andrea Mitchell) Stop both groups of mystic madmen', href: 'https://homecoming.wiki/wiki/Andrea_Mitchell#Stop_both_groups_of_mystic_madmen_(20-24)' },
  ],
  flashback: {
    id: '0.15',
    name: 'Stop the Mystic Madmen',
    levelRange: [20, 24],
  },
}
