import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../map/echo-rikti-crash-site'

export const CommunicationsSpecialist: BadgeData = {
  type: 'EXPLORATION',
  key: 'communications-specialist',
  setTitle: { id: 2328 },
  name: [{ value: 'Communications Specialist' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `These communications towers are critical for boosting signals with enough power to overcome Rikti jamming technology.` }],
  mapKey: EchoRiktiCrashSite.key,
  loc: [959.6, 171.3, -1174.4],
  notes: 'Next to a red and white communications tower antenna.',
  links: [
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '7',
}
