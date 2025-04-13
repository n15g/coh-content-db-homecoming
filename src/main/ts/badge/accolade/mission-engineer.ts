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
  type: 'accolade',
  key: 'mission-engineer',
  setTitleId: [1134],
  name: 'Mission Engineer',
  morality: 'all',
  badgeText: `Your overall expertise in everything relating to the Mission Architect system has earned you the title of Mission Engineer.
Owning this Accolade will grant you the ability to remotely create and edit Mission Architect content.`,
  effect: `Awards usage of the Architect Comlink macro.`,
  links: [
    { title: 'Mission Engineer Badge', href: 'https://homecoming.wiki/wiki/Mission_Engineer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/mission-engineer.png',
  requirements: [
    { key: ThrillSeeker.key, type: 'badge', badgeKey: ThrillSeeker.key },
    { key: Gamer.key, type: 'badge', badgeKey: Gamer.key },
    { key: TicketTaker.key, type: 'badge', badgeKey: TicketTaker.key },
    { key: Author.key, type: 'badge', badgeKey: Author.key },
    { key: Recognized.key, type: 'badge', badgeKey: Recognized.key },
    { key: EarlyBird.key, type: 'badge', badgeKey: EarlyBird.key },
    { key: Customizer.key, type: 'badge', badgeKey: Customizer.key },
    { key: BugFixer.key, type: 'badge', badgeKey: BugFixer.key },
  ],
}
