import { BadgeData } from 'coh-content-db'
import { ThrillSeeker } from '../exploration/thrill-seeker'
import { Gamer } from '../ae/gamer'
import { TicketTaker } from '../ae/ticket-taker'
import { Author } from '../ae/author'
import { Recognized } from '../ae/recognized'
import { EarlyBird } from '../ae/early-bird'
import { Customizer } from '../ae/customizer'
import { BugFixer } from '../ae/bug-fixer'

export const MissionEngineer: BadgeData = {
  type: 'ACCOLADE',
  key: 'mission-engineer',
  setTitle: { id: 1134 },
  name: 'Mission Engineer',
  alignment: ['H', 'V', 'P'],
  badgeText: `Your overall expertise in everything relating to the Mission Architect system has earned you the title of Mission Engineer.
Owning this Accolade will grant you the ability to remotely create and edit Mission Architect content.`,
  effect: `Awards usage of the Architect Comlink macro.`,
  links: [
    { title: 'Mission Engineer Badge', href: 'https://homecoming.wiki/wiki/Mission_Engineer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/mission-engineer.png',
  requirements: [
    { key: ThrillSeeker.key, type: 'BADGE', badgeKey: ThrillSeeker.key },
    { key: Gamer.key, type: 'BADGE', badgeKey: Gamer.key },
    { key: TicketTaker.key, type: 'BADGE', badgeKey: TicketTaker.key },
    { key: Author.key, type: 'BADGE', badgeKey: Author.key },
    { key: Recognized.key, type: 'BADGE', badgeKey: Recognized.key },
    { key: EarlyBird.key, type: 'BADGE', badgeKey: EarlyBird.key },
    { key: Customizer.key, type: 'BADGE', badgeKey: Customizer.key },
    { key: BugFixer.key, type: 'BADGE', badgeKey: BugFixer.key },
  ],
}
