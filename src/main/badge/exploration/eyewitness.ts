import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Eyewitness: BadgeData = {
  type: 'EXPLORATION',
  key: 'eyewitness',
  setTitle: { id: 759 },
  name: [{ value: 'Eyewitness' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: EchoRiktiCrashSite.key,
  loc: [1820.3, 471.3, -4605.7],
  badgeText: [{ value: 'This is an excellent vantage point for keeping an eye on the crash site.' }],
  notes: `**Moved from ${zoneLink(RiktiWarZone)} in Issue 25.**

On the tippy top point of the tallest building overlooking the downed ship.`,
  links: [
    { title: 'Eyewitness Badge', href: 'https://homecoming.wiki/wiki/Eyewitness_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '6',
}
