import { BadgeData } from 'coh-content-db'
import { Professor } from '../day-job/professor'
import { Caregiver } from '../day-job/caregiver'

export const Physician: BadgeData = {
  type: 'accolade',
  key: 'physician',
  setTitleId: [1067],
  name: 'Physician',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `Your studies at the Universities of Paragon City and work with the hospitals of Paragon have earned you the Physician Accolade.
While logged out at a Univeristy or inside a Hospital you will earn charges for your Revive Ally power.`,
    },
    {
      alignment: 'villain', value: `Your studies at the Universities of the Rogue Isles and work within the Hospitals of the Rogue Isles have earned you the Physician Accolade.
While logged out at a University or inside a Hospital you will earn charges for your Revive Ally power.`,
    },
  ],
  links: [
    { title: 'Physician Badge', href: 'https://homecoming.wiki/wiki/Physician_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/physician.png',
  requirements: [
    { key: Professor.key, type: 'badge', badgeKey: Professor.key },
    { key: Caregiver.key, type: 'badge', badgeKey: Caregiver.key },
  ],
}
