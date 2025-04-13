import { MissionData } from 'coh-content-db'
import { ArbiterHawk } from '../contact/arbiter-hawk'
import { JessicaMeganDuncan } from '../contact/jessica-megan-duncan'

export const TheWidowInRed: MissionData = {
  key: 'the-widow-in-red',
  name: 'The Widow in Red',
  type: 'story-arc',
  morality: 'all',
  contactKeys: [JessicaMeganDuncan.key, ArbiterHawk.key],
  levelRange: [30],
  notes: `Only available during the Valentine's event`,
  links: [
    { title: 'The Widow in Red (Jessica Megan Duncan)', href: 'https://homecoming.wiki/wiki/Jessica_Megan_Duncan#The_Widow_in_Red' },
    { title: 'The Widow in Red (Arbiter Hawk)', href: 'https://homecoming.wiki/wiki/Arbiter_Hawk#The_Widow_in_Red' },
  ],
}
