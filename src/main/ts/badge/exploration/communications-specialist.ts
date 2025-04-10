import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'

export const CommunicationsSpecialist: BadgeData = {
  type: 'exploration',
  key: 'communications-specialist',
  setTitleId: [2328],
  name: 'Communications Specialist',
  morality: 'all',
  badgeText: `These communications towers are critical for boosting signals with enough power to overcome Rikti jamming technology.`,
  notes: 'Next to a red and white communications tower antenna.',
  links: [
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoRiktiCrashSite.key, coords: [959.6, 171.3, -1174.4], icon: 'badge', iconText: '7' } },
  ],
}
