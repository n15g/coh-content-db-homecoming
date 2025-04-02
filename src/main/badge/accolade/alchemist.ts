import { BadgeData } from 'coh-content-db'
import { Caregiver } from '../day-job/caregiver'
import { Midnighter } from '../day-job/midnighter'

export const Alchemist: BadgeData = {
  type: 'ACCOLADE',
  key: 'alchemist',
  setTitle: { id: 1068 },
  name: 'Alchemist',
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: `Your arcane studies with the Midnighters and time spent working in the Hospitals of Paragon City has earned you the Alchemist Accolade.
While logged out within the Midnighter's Club or inside a Hospital you will earn charges for your Vitalize power.`,
    },
    {
      alignment: 'V', value: `Your arcane studies with the Midnighters and time spent working in the Hospitals of the Rogue Isles has earned you the Alchemist Accolade.
While logged out within the Midnighter's Club or inside a Hospital you will earn charges for your Vitalize power.`,
    },
  ],
  links: [
    { title: 'Alchemist Badge', href: 'https://homecoming.wiki/wiki/Alchemist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/alchemist.png',
  requirements: [
    { key: Caregiver.key, type: 'BADGE', badgeKey: Caregiver.key },
    { key: Midnighter.key, type: 'BADGE', badgeKey: Midnighter.key },
  ],
}
