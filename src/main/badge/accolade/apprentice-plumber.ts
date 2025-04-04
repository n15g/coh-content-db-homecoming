import { BadgeData } from 'coh-content-db'
import { BaumtonAvenger } from '../exploration/baumton-avenger'
import { DownwardBound } from '../exploration/downward-bound'
import { Plutonian } from '../exploration/plutonian'
import { SeekerOfTheLost } from '../exploration/seeker-of-the-lost'
import { SewerKing } from '../exploration/sewer-king'
import { SewerStalker } from '../exploration/sewer-stalker'
import { SpiritOfTheCity } from '../exploration/spirit-of-the-city'
import { TerrorOfTheVahzilok } from '../exploration/terror-of-the-vahzilok'

export const ApprenticePlumber: BadgeData = {
  type: 'accolade',
  key: 'apprentice-plumber',
  setTitleId: [1885],
  name: 'Apprentice Plumber',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within the Sewer Network.`,
  links: [
    { title: 'Apprentice Plumber Badge', href: 'https://homecoming.wiki/wiki/Apprentice_Plumber_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: BaumtonAvenger.key, type: 'badge', badgeKey: BaumtonAvenger.key },
    { key: DownwardBound.key, type: 'badge', badgeKey: DownwardBound.key },
    { key: Plutonian.key, type: 'badge', badgeKey: Plutonian.key },
    { key: SeekerOfTheLost.key, type: 'badge', badgeKey: SeekerOfTheLost.key },
    { key: SewerKing.key, type: 'badge', badgeKey: SewerKing.key },
    { key: SewerStalker.key, type: 'badge', badgeKey: SewerStalker.key },
    { key: SpiritOfTheCity.key, type: 'badge', badgeKey: SpiritOfTheCity.key },
    { key: TerrorOfTheVahzilok.key, type: 'badge', badgeKey: TerrorOfTheVahzilok.key },
  ],
}
