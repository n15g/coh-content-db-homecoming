import { BadgeData, zoneLink } from 'coh-content-db'
import { NightWard } from '../../zone/night-ward'

export const Monolithic: BadgeData = {
  type: 'EXPLORATION',
  key: 'monolithic',
  setTitle: { id: 2232 },
  name: [{ value: 'Monolithic' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: NightWard.key,
  loc: [-2605, 75, 2031],
  badgeText: [{
    value: `As you set foot in this peculiar stone circle you can feel ancient magics coursing through your veins.
The source of its power remains a mystery - as well it should.
Night Ward harbors many secrets too awesome, too transcendent for the mortal mind to behold.
To merely be counted among those touched by her radiance is in itself a humbling experience.`,
  }],
  notes: `Located in ${zoneLink(NightWard)}, in the The Digs neighborhood, 464 yards SSE of the map marker; near the capsized boat.`,
  links: [
    { title: 'Monolithic Badge', href: 'https://homecoming.wiki/wiki/Monolithic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '7',
}
