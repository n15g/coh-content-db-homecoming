import { BadgeData } from 'coh-content-db'
import { Annihilator } from '../defeat/annihilator'
import { ArachnosRising } from '../history/arachnos-rising'
import { TheMongoose } from '../defeat/the-mongoose'
import { TheNextBigThing } from '../exploration/the-next-big-thing'
import { PenitentOfVice } from '../accomplishment/penitent-of-vice'
import { WeaponInspector } from '../exploration/weapon-inspector'

export const ExMarshal: BadgeData = {
  type: 'accolade',
  key: 'ex-marshal',
  setTitleId: [532],
  name: [
    { alignment: 'hero', value: 'Ex-Marshal' },
    { alignment: 'villain', value: 'Marshal' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `You once held the title of Marshal in Arachnos. Unfortunately, the memory is all that remains of the power it once gave you.` },
    { alignment: 'villain', value: `You've been awarded the title of Marshal for your service to Arachnos. This has given you a 5% increase to Endurance.` },
  ],
  effect: `Awards +5 Max Endurance.`,
  links: [
    { title: 'Ex-Marshal Badge', href: 'https://homecoming.wiki/wiki/Ex-Marshal_Badge' },
    { title: 'Marshal Badge', href: 'https://homecoming.wiki/wiki/Marshal_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/ex-marshal.png',
  requirements: [
    { key: Annihilator.key, type: 'badge', badgeKey: Annihilator.key },
    { key: ArachnosRising.key, type: 'badge', badgeKey: ArachnosRising.key },
    { key: PenitentOfVice.key, type: 'badge', badgeKey: PenitentOfVice.key },
    { key: TheMongoose.key, type: 'badge', badgeKey: TheMongoose.key },
    { key: TheNextBigThing.key, type: 'badge', badgeKey: TheNextBigThing.key },
    { key: WeaponInspector.key, type: 'badge', badgeKey: WeaponInspector.key },
  ],
}
