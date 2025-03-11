import { BadgeData } from 'coh-content-db'
import { Professor } from '../day-job/professor'
import { Caregiver } from '../day-job/caregiver'

export const Physician: BadgeData = {
  type: 'ACCOLADE',
  key: 'physician',
  setTitle: { id: 1067 },
  name: [
    { value: 'Physician' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Your studies at the Universities of Paragon City and work with the hospitals of Paragon have earned you the Physician Accolade.  While logged out at a Univeristy or inside a Hospital you will earn charges for your Revive Ally power.` },
    { alignment: 'V', value: `Your studies at the Universities of the Rogue Isles and work within the Hospitals of the Rogue Isles have earned you the Physician Accolade.  While logged out at a University or inside a Hospital you will earn charges for your Revive Ally power.` },
  ],
  notes: `Earn the [badge:professor] and [badge:caregiver] Day Jobs`,
  links: [
    { title: 'Physician Badge', href: 'https://homecoming.wiki/wiki/Physician_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/physician.png' },
  ],
  partials: [
    { key: Professor.key, type: 'BADGE', badgeKey: Professor.key },
    { key: Caregiver.key, type: 'BADGE', badgeKey: Caregiver.key },
  ],
}
