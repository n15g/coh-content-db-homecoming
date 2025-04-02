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
  type: 'ACCOLADE',
  key: 'crash-landed',
  setTitle: { id: 2330 },
  name: [
    { value: 'Crash Landed' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge in Echo: Rikti Crash Site.` },
  ],
  links: [
    { title: 'Crash Landed Badge', href: 'https://homecoming.wiki/wiki/Crash_Landed_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  requirements: [
    { key: Powerful.key, type: 'BADGE', badgeKey: Powerful.key },
    { key: UnderFire.key, type: 'BADGE', badgeKey: UnderFire.key },
    { key: Scarred.key, type: 'BADGE', badgeKey: Scarred.key },
    { key: Asunder.key, type: 'BADGE', badgeKey: Asunder.key },
    { key: Eyewitness.key, type: 'BADGE', badgeKey: Eyewitness.key },
    { key: Ace.key, type: 'BADGE', badgeKey: Ace.key },
    { key: CommunicationsSpecialist.key, type: 'BADGE', badgeKey: CommunicationsSpecialist.key },
    { key: Shielded.key, type: 'BADGE', badgeKey: Shielded.key },
  ],
}
