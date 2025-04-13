import { BadgeData, missionLink } from 'coh-content-db'
import { TheFreakishLabOfDrVahzilokAct2 } from '../../mission/the-freakish-lab-of-dr-vahzilok-act-2'

export const TarnishedStar: BadgeData = {
  type: 'accomplishment',
  key: 'tarnished-star',
  setTitleId: [2438],
  name: 'Tarnished Star',
  morality: 'villainous',
  badgeText: `Despite all the villains you've put away, you couldn't help becoming one yourself.
You were reminded of this when Manticore ambushed you in the Zig during Clamor and Bile's breakout, in front of the nineteen high-profile arrests you'd made yourself.
Undeterred, you added him and his Shining Star lackeys to your list of accomplishments.`,
  acquisition: `In the ${missionLink(TheFreakishLabOfDrVahzilokAct2)} story arc, fill every jail cell in The Zig during your life as a hero, before becoming a villain and releasing Bile.`,
  links: [
    { title: 'Tarnished Star Badge', href: 'https://homecoming.wiki/wiki/Tarnished_Star_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tarnished-star.png',
}
