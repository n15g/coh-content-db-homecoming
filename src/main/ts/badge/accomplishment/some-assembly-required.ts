import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { PrimeTimeSublime } from '../../mission/prime-time-sublime'

export const SomeAssemblyRequired: BadgeData = {
  type: 'accomplishment',
  key: 'some-assembly-required',
  gameId: 'Mission_i28_MrRay_Bonus',
  setTitleId: [2604],
  name: 'Some Assembly Required',
  releaseDate: '2026-10-06',
  morality: 'villainous',
  badgeText: `When given the opportunity to build your own killer robot, you threw caution to the wind and installed literally everything and even the kitchen sink. There's not much this robot CAN'T do now!`,
  acquisition: `Construct your killer robot using all 10 standard optional components in a single play through of the ${missionLink(PrimeTimeSublime)} story arc.`,
  links: [
    { title: 'Some Assembly Required Badge', href: 'https://homecoming.wiki/wiki/Some_Assembly_Required_Badge' },
    { title: PrimeTimeSublime.name, href: missionUri(PrimeTimeSublime) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/some-assembly-required.png',
}
