import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Powerful: BadgeData = {
  type: 'EXPLORATION',
  key: 'powerful',
  setTitle: { id: 749 },
  name: [{ value: 'Powerful' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: EchoRiktiCrashSite.key,
  loc: [275.7, 84.3, -745.5],
  badgeText: [{ value: 'This power plant is the glue that holds the operation together. Without it, there would be chaos.' }],
  notes: `**Moved from ${zoneLink(RiktiWarZone)} in Issue 25.**

          Eastern side of the power substation, on the ground.`,
  links: [
    { title: 'Powerful Badge', href: 'https://homecoming.wiki/wiki/Powerful_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '2',
}
