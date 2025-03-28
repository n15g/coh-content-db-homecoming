import { BadgeData } from 'coh-content-db'
import { ForceOfJustice } from './force-of-justice'
import { Gallant } from '../achievement/gallant'
import { GuardianOfForever } from '../achievement/guardian-of-forever'
import { BeyondReasonableDoubt } from '../achievement/beyond-reasonable-doubt'
import { TheGreaterGood } from '../accomplishment/the-greater-good'
import { Bicentennial } from '../history/bicentennial'

export const ProtectorOfParagonCity: BadgeData = {
  type: 'ACCOLADE',
  key: 'protector-of-paragon-city',
  setTitle: { id: 2543 },
  name: [
    { alignment: 'H', value: 'Protector of Paragon City' },
    { alignment: 'V', value: 'Traitor to Paragon City' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `You have shown true dedication to the protection of Paragon City, without sacrificing the morals that the city is founded and established on.` },
    { alignment: 'V', value: `You were once an icon of the ethics upon which Paragon City was established. That's long gone, now.` },
  ],
  notes: `Awards the Sheer Willpower power.`,
  links: [
    { title: 'Protector of Paragon City Badge', href: 'https://homecoming.wiki/wiki/Protector_of_Paragon_City_Badge' },
    { title: 'Traitor to Paragon City Badge', href: 'https://homecoming.wiki/wiki/Traitor_to_Paragon_City_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/protector-of-paragon-city.png' },
  ],
  effect: `Sheer Willpower`,
  requirements: [[
    { key: ForceOfJustice.key, type: 'BADGE', badgeKey: ForceOfJustice.key },
    { key: Gallant.key, type: 'BADGE', badgeKey: Gallant.key },
    { key: GuardianOfForever.key, type: 'BADGE', badgeKey: GuardianOfForever.key },
    { key: BeyondReasonableDoubt.key, type: 'BADGE', badgeKey: BeyondReasonableDoubt.key },
    { key: TheGreaterGood.key, type: 'BADGE', badgeKey: TheGreaterGood.key },
    { key: Bicentennial.key, type: 'BADGE', badgeKey: Bicentennial.key },
  ]],
}
