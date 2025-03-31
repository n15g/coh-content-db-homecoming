import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const UnderFire: BadgeData = {
  type: 'EXPLORATION',
  key: 'under-fire',
  setTitle: { id: 751 },
  name: [{ value: 'Under Fire' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: EchoRiktiCrashSite.key,
  loc: [1628.6, 0.3, -1047.3],
  badgeText: [{ value: 'You just stepped into a major battle zone. Was this all that you signed up for?' }],
  notes: `
**Moved from ${zoneLink(RiktiWarZone)} in Issue 25.**

Next to the road.`,
  links: [
    { title: 'Under Fire Badge', href: 'https://homecoming.wiki/wiki/Under_Fire_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '3',
}
