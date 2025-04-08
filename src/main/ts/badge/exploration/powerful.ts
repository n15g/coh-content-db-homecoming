import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'

export const Powerful: BadgeData = {
  type: 'exploration',
  key: 'powerful',
  setTitleId: [749],
  name: 'Powerful',
  morality: 'all',
  badgeText: 'This power plant is the glue that holds the operation together. Without it, there would be chaos.',
  notes: `Located on the eastern side of the power substation, on the ground.`,
  links: [
    { title: 'Powerful Badge', href: 'https://homecoming.wiki/wiki/Powerful_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoRiktiCrashSite.key, coords: [275.7, 84.3, -745.5] }, vidiotMapKey: '2' },
  ],
}
