import { BadgeData } from 'coh-content-db'
import { Duelist } from '../day-job/duelist'
import { Predator } from '../day-job/predator'

export const Gladiator: BadgeData = {
  type: 'accolade',
  key: 'gladiator',
  setTitleId: [1075],
  name: 'Gladiator',
  morality: 'all',
  badgeText: `Your reputation as a ferocious combatant in both PvP Zones and the Arena has earned you the Gladiator Accolade.
While logged out in either an Arena or a PvP Zone you will additional time for your Combat Shield power.`,
  links: [
    { title: 'Gladiator Badge', href: 'https://homecoming.wiki/wiki/Gladiator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/gladiator.png',
  requirements: [
    { key: Duelist.key, type: 'badge', badgeKey: Duelist.key },
    { key: Predator.key, type: 'badge', badgeKey: Predator.key },
  ],
}
