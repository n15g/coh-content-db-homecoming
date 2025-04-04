import { BadgeData } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const DearlyDeparted: BadgeData = {
  type: 'exploration',
  key: 'dearly-departed',
  setTitleId: [2048],
  name: 'Dearly Departed',
  morality: 'all',
  zoneKey: FirstWard.key,
  loc: [-2188, 77, 486],
  badgeText: `When the Devouring Earth struck First Ward the attack came suddenly and without warning.
Thousands lost their lives on that terrible day.
Though they knew they would likely never return to First Ward, the survivors laid the victims to rest in the Mercyview Cemetery believing the dead would wish to be close to
the city they helped build.
The survivors believed too that one day they would return and reclaim First Ward in the name of the fallen.`,
  notes: `Located on the west side of the eastern-most island of Lock of Torment, 83 yards NNE of the map marker, at the base of a small mausoleum.`,
  links: [
    { title: 'Dearly Departed Badge', href: 'https://homecoming.wiki/wiki/Dearly_Departed_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '1',
}
