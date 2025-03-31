import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Scarred: BadgeData = {
  type: 'EXPLORATION',
  key: 'scarred',
  setTitle: { id: 756 },
  name: [{ value: 'Scarred' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: EchoRiktiCrashSite.key,
  loc: [3216.4, -137.3, -3198.1],
  badgeText: [{ value: 'The Rikti mother ship ripped a path through this area when it crashed into the ground.' }],
  notes: `**Moved from ${zoneLink(RiktiWarZone)} in Issue 25.**

On a broken fragment of road next to a destroyed building. A wrecked car is pointed at it.`,
  links: [
    { title: 'Scarred Badge', href: 'https://homecoming.wiki/wiki/Scarred_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '4',
}
