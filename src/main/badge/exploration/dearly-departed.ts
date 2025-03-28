import { BadgeData, zoneLink } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const DearlyDeparted: BadgeData = {
  type: 'EXPLORATION',
  key: 'dearly-departed',
  setTitle: { id: 2048 },
  name: [{ value: 'Dearly Departed' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: FirstWard.key,
  loc: [-2188, 77, 486],
  badgeText: [{
    value: `When the Devouring Earth struck First Ward the attack came suddenly and without warning.
Thousands lost their lives on that terrible day.
Though they knew they would likely never return to First Ward, the survivors laid the victims to rest in the Mercyview Cemetery believing the dead would wish to be close to
the city they helped build.
The survivors believed too that one day they would return and reclaim First Ward in the name of the fallen.`,
  }],
  notes: `Located in ${zoneLink(FirstWard)} 83 yards NNE of the map marker; at the base of a small mausoleum..
It is on the west side of the eastern-most island of Lock of Torment.`,
  links: [
    { title: 'Dearly Departed Badge', href: 'https://homecoming.wiki/wiki/Dearly_Departed_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '1',
}
