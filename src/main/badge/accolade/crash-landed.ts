import { BadgeData } from 'coh-content-db'
import { Powerful } from '../exploration/powerful'
import { UnderFire } from '../exploration/under-fire'
import { Scarred } from '../exploration/scarred'
import { Asunder } from '../exploration/asunder'
import { Eyewitness } from '../exploration/eyewitness'
import { Ace } from '../exploration/ace'
import { CommunicationsSpecialist } from '../exploration/communications-specialist'
import { Shielded } from '../exploration/shielded'

export const CrashLanded: BadgeData = {
  type: 'accolade',
  key: 'crash-landed',
  setTitleId: [2330],
  name: 'Crash Landed',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge in Echo: Rikti Crash Site.`,
  links: [
    { title: 'Crash Landed Badge', href: 'https://homecoming.wiki/wiki/Crash_Landed_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: Powerful.key, type: 'badge', badgeKey: Powerful.key },
    { key: UnderFire.key, type: 'badge', badgeKey: UnderFire.key },
    { key: Scarred.key, type: 'badge', badgeKey: Scarred.key },
    { key: Asunder.key, type: 'badge', badgeKey: Asunder.key },
    { key: Eyewitness.key, type: 'badge', badgeKey: Eyewitness.key },
    { key: Ace.key, type: 'badge', badgeKey: Ace.key },
    { key: CommunicationsSpecialist.key, type: 'badge', badgeKey: CommunicationsSpecialist.key },
    { key: Shielded.key, type: 'badge', badgeKey: Shielded.key },
  ],
}
