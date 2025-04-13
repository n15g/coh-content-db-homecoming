import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'

export const Shielded: BadgeData = {
  type: 'exploration',
  key: 'shielded',
  setTitleId: [2329],
  name: 'Shielded',
  morality: 'all',
  badgeText: `Despite its crash landing, the Rikti mother ship's shields continue to function, providing the stranded Rikti with a relatively safe haven.`,
  notes: 'Located around 11:57 on the clock if the ship is the clock face, right up against the shield.',
  links: [
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoRiktiCrashSite.key, coords: [2934.4, -10.3, -6249.4], icon: 'badge', iconText: '8' } },
  ],
}
