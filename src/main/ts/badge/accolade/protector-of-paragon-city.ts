import { BadgeData } from 'coh-content-db'
import { ForceOfJustice } from './force-of-justice'
import { Gallant } from '../achievement/gallant'
import { GuardianOfForever } from '../achievement/guardian-of-forever'
import { HelpingHand } from '../accomplishment/helping-hand'
import { TheGreaterGood } from '../accomplishment/the-greater-good'
import { Bicentennial } from '../history/bicentennial'

export const ProtectorOfParagonCity: BadgeData = {
  type: 'accolade',
  key: 'protector-of-paragon-city',
  setTitleId: [2543],
  name: [
    { alignment: 'hero', value: 'Protector of Paragon City' },
    { alignment: 'villain', value: 'Traitor to Paragon City' },
  ],
  releaseDate: '2024-11-19',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You have shown true dedication to the protection of Paragon City, without sacrificing the morals that the city is founded and established on.` },
    { alignment: 'villain', value: `You were once an icon of the ethics upon which Paragon City was established. That's long gone, now.` },
  ],
  effect: 'Awards the Sheer Willpower power.',
  links: [
    { title: 'Protector of Paragon City Badge', href: 'https://homecoming.wiki/wiki/Protector_of_Paragon_City_Badge' },
    { title: 'Traitor to Paragon City Badge', href: 'https://homecoming.wiki/wiki/Traitor_to_Paragon_City_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/protector-of-paragon-city.png',
  requirements: [
    { key: ForceOfJustice.key, type: 'badge', badgeKey: ForceOfJustice.key },
    { key: Gallant.key, type: 'badge', badgeKey: Gallant.key },
    { key: GuardianOfForever.key, type: 'badge', badgeKey: GuardianOfForever.key },
    { key: HelpingHand.key, type: 'badge', badgeKey: HelpingHand.key },
    { key: TheGreaterGood.key, type: 'badge', badgeKey: TheGreaterGood.key },
    { key: Bicentennial.key, type: 'badge', badgeKey: Bicentennial.key },
  ],
}
