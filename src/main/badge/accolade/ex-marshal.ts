import { BadgeData } from 'coh-content-db'
import { Annihilator } from '../defeat/annihilator'
import { ArachnosRising } from '../history/arachnos-rising'
import { TheMongoose } from '../defeat/the-mongoose'
import { TheNextBigThing } from '../exploration/the-next-big-thing'
import { PenitentOfVice } from '../accomplishment/penitent-of-vice'
import { WeaponInspector } from '../exploration/weapon-inspector'

export const ExMarshal: BadgeData = {
  type: 'ACCOLADE',
  key: 'ex-marshal',
  setTitle: { id: 532 },
  name: [
    { alignment: 'H', value: 'Ex-Marshal' },
    { alignment: 'V', value: 'Marshal' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `You once held the title of Marshal in Arachnos. Unfortunately, the memory is all that remains of the power it once gave you.` },
    { alignment: 'V', value: `You've been awarded the title of Marshal for your service to Arachnos. This has given you a 5% increase to Endurance.` },
  ],
  effect: `Awards +5 Max Endurance.`,
  links: [
    { title: 'Ex-Marshal Badge', href: 'https://homecoming.wiki/wiki/Ex-Marshal_Badge' },
    { title: 'Marshal Badge', href: 'https://homecoming.wiki/wiki/Marshal_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/ex-marshal.png' },
  ],
  requirements: [[
    { key: Annihilator.key, type: 'BADGE', badgeKey: Annihilator.key },
    { key: ArachnosRising.key, type: 'BADGE', badgeKey: ArachnosRising.key },
    { key: PenitentOfVice.key, type: 'BADGE', badgeKey: PenitentOfVice.key },
    { key: TheMongoose.key, type: 'BADGE', badgeKey: TheMongoose.key },
    { key: TheNextBigThing.key, type: 'BADGE', badgeKey: TheNextBigThing.key },
    { key: WeaponInspector.key, type: 'BADGE', badgeKey: WeaponInspector.key },
  ]],
}
