import { BadgeData, mapLink } from 'coh-content-db'
import { SewerNetwork } from '../../map/sewer-network'
import { BaumtonAvenger } from '../exploration/baumton-avenger'
import { DownwardBound } from '../exploration/downward-bound'
import { Plutonian } from '../exploration/plutonian'
import { SeekerOfTheLost } from '../exploration/seeker-of-the-lost'
import { SewerKing } from '../exploration/sewer-king'
import { SewerStalker } from '../exploration/sewer-stalker'
import { SpiritOfTheCity } from '../exploration/spirit-of-the-city'
import { TerrorOfTheVahzilok } from '../exploration/terror-of-the-vahzilok'

export const ApprenticePlumber: BadgeData = {
  type: 'ACCOLADE',
  key: 'apprentice-plumber',
  setTitle: { id: 1885 },
  name: [
    { value: 'Apprentice Plumber' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within the Sewer Network.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(SewerNetwork)}`,
  links: [
    { title: 'Apprentice Plumber Badge', href: 'https://homecoming.wiki/wiki/Apprentice_Plumber_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  partials: [
    { key: BaumtonAvenger.key, type: 'BADGE', badgeKey: BaumtonAvenger.key },
    { key: DownwardBound.key, type: 'BADGE', badgeKey: DownwardBound.key },
    { key: Plutonian.key, type: 'BADGE', badgeKey: Plutonian.key },
    { key: SeekerOfTheLost.key, type: 'BADGE', badgeKey: SeekerOfTheLost.key },
    { key: SewerKing.key, type: 'BADGE', badgeKey: SewerKing.key },
    { key: SewerStalker.key, type: 'BADGE', badgeKey: SewerStalker.key },
    { key: SpiritOfTheCity.key, type: 'BADGE', badgeKey: SpiritOfTheCity.key },
    { key: TerrorOfTheVahzilok.key, type: 'BADGE', badgeKey: TerrorOfTheVahzilok.key },
  ],
}
