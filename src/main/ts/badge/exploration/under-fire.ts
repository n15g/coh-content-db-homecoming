import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'

export const UnderFire: BadgeData = {
  type: 'exploration',
  key: 'under-fire',
  setTitleId: [751],
  name: 'Under Fire',
  morality: 'all',
  badgeText: 'You just stepped into a major battle zone. Was this all that you signed up for?',
  notes: `Located next to the road.`,
  links: [
    { title: 'Under Fire Badge', href: 'https://homecoming.wiki/wiki/Under_Fire_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoRiktiCrashSite.key, coords: [1628.6, 0.3, -1047.3], icon: 'badge', iconText: '3' } },
  ],
}
