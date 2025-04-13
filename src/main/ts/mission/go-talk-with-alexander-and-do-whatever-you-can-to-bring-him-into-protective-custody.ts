import { MissionData } from 'coh-content-db'
import { AshwinLannister } from '../contact/ashwin-lannister'
import { LauriePennington } from '../contact/laurie-pennington'

export const GoTalkWithAlexanderAndDoWhateverYouCanToBringHimIntoProtectiveCustody: MissionData = {
  key: 'go-talk-with-alexander-and-do-whatever-you-can-to-bring-him-into-protective-custody',
  name: 'Go talk with Alexander, and do whatever you can to bring him into protective custody',
  type: 'mission',
  morality: 'heroic',
  contactKeys: [AshwinLannister.key, LauriePennington.key],
  levelRange: [25, 29],
  links: [
    { title: '(Ashwin Lannister) Go talk with Alexander, and do whatever you can to bring him into protective custody', href: 'https://homecoming.wiki/wiki/Ashwin_Lannister#Go_talk_with_Alexander,_and_do_whatever_you_can_to_bring_him_into_protective_custody_(25-30)' },
    { title: '(Laurie Pennington) Go talk with Alexander, and do whatever you can to bring him into protective custody', href: 'https://homecoming.wiki/wiki/Laurie_Pennington#Go_talk_with_Alexander,_and_do_whatever_you_can_to_bring_him_into_protective_custody_(25-30)' },
  ],
  flashback: {
    id: '0.23',
    name: `The redemption of Alexander 'the Great'`,
    levelRange: [25, 29],
  },
}
