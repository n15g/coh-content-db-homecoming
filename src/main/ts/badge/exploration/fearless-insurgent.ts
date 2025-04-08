import { BadgeData } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const FearlessInsurgent: BadgeData = {
  type: 'exploration',
  key: 'fearless-insurgent',
  setTitleId: [2050],
  name: 'Fearless Insurgent',
  morality: 'all',
  badgeText: `You have penetrated the heart of the D.U.S.T. Ranger facility, a breach in security that the rangers will be spending many long hours analyzing, pondering,
and adjusting procedures over.
Heads will roll.
You represent what they fear the most: a dedicated, powerful, fearless insurgent who penetrates their defenses and wreaks havoc.`,
  notes: `Located in the Free-Fire Zone neighborhood, 90 yards due west of the map marker, east of the CTA building.`,
  links: [
    { title: 'Fearless Insurgent Badge', href: 'https://homecoming.wiki/wiki/Fearless_Insurgent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirstWard.key, coords: [-626, 57, -2656] }, vidiotMapKey: '3' },
  ],
}
