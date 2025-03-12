import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../map/echo-rikti-crash-site'

export const Shielded: BadgeData = {
  type: 'EXPLORATION',
  key: 'shielded',
  setTitle: { id: 2329 },
  name: [{ value: 'Shielded' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Despite its crash landing, the Rikti mother ship's shields continue to function, providing the stranded Rikti with a relatively safe haven.` }],
  mapKey: EchoRiktiCrashSite.key,
  loc: [2934.4, -10.3, -6249.4],
  notes: 'Around 11:57 on the clock if the ship is the clock face, right up against the shield.',
  links: [
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '8',
}
