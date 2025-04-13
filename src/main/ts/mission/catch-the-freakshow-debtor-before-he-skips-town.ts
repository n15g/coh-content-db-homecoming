import { MissionData } from 'coh-content-db'
import { BasseCroupier } from '../contact/basse-croupier'

export const CatchTheFreakshowDebtorBeforeHeSkipsTown: MissionData = {
  key: 'catch-the-freakshow-debtor-before-he-skips-town',
  name: 'Catch the Freakshow debtor before he skips town',
  type: 'mission',
  morality: 'villainous',
  contactKeys: BasseCroupier.key,
  levelRange: [35, 39],
  links: [
    { title: 'Catch the Freakshow debtor before he skips town', href: 'https://homecoming.wiki/wiki/Basse_Croupier#Catch_the_Freakshow_debtor_before_he_skips_town.' },
  ],
  flashback: {
    id: '6.77',
    name: 'B4nKbUsTah',
    levelRange: [35, 39],
  },
}
