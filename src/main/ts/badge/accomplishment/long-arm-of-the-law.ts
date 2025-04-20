import { BadgeData, missionLink } from 'coh-content-db'
import { ANewWar } from '../../mission/a-new-war'

export const LongArmOfTheLaw: BadgeData = {
  type: 'accomplishment',
  key: 'long-arm-of-the-law',
  setTitleId: [2262],
  name: 'Long Arm of the Law',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You were able to stop all of the chaos that was running rampant around the bank in Brickstown.',
  acquisition: `Properly assign the New Praetorians to handle the side missions in the "Culling the Chaos" mission of the ${missionLink(ANewWar)} story arc.`,
  notes: `
* Pendragon handles the Freakshow.
* Aurora Pena handles the Hellions.
* Grant Creston handles Nemesis.`,
  links: [
    { title: 'Long Arm of the Law Badge', href: 'https://homecoming.wiki/wiki/Long_Arm_of_the_Law_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png',
}
