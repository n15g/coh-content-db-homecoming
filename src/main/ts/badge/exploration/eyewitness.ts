import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'

export const Eyewitness: BadgeData = {
  type: 'exploration',
  key: 'eyewitness',
  setTitleId: [759],
  name: 'Eyewitness',
  morality: 'all',
  badgeText: 'This is an excellent vantage point for keeping an eye on the crash site.',
  notes: `On the top point of the tallest building overlooking the downed ship.`,
  links: [
    { title: 'Eyewitness Badge', href: 'https://homecoming.wiki/wiki/Eyewitness_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoRiktiCrashSite.key, coords: [1820.3, 471.3, -4605.7], icon: 'badge', iconText: '6' } },
  ],
}
