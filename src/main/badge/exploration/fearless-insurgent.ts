import { BadgeData, mapLink } from 'coh-content-db'
import { FirstWard } from '../../map/first-ward'

export const FearlessInsurgent: BadgeData = {
  type: 'EXPLORATION',
  key: 'fearless-insurgent',
  setTitle: { id: 2050 },
  name: [{ value: 'Fearless Insurgent' }],
  alignment: ['H', 'V', 'P'],
  mapKey: FirstWard.key,
  loc: [-626, 57, -2656],
  badgeText: [{
    value: `You have penetrated the heart of the D.U.S.T. Ranger facility, a breach in security that the rangers will be spending many long hours analyzing, pondering,
and adjusting procedures over.
Heads will roll.
You represent what they fear the most: a dedicated, powerful, fearless insurgent who penetrates their defenses and wreaks havoc.`,
  }],
  notes: `Located in ${mapLink(FirstWard)} in the Free-Fire Zone neighborhood, 90 yards due west of the map marker; east of the CTA building.`,
  links: [
    { title: 'Fearless Insurgent Badge', href: 'https://homecoming.wiki/wiki/Fearless_Insurgent_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '3',
}
