import { BadgeData } from 'coh-content-db'

export const CantTouchThis: BadgeData = {
  type: 'achievement',
  key: 'cant-touch-this',
  setTitleId: [2481],
  name: `Can't Touch This`,
  morality: 'villainous',
  badgeText: `You've shown King Midas that he can't touch this by defeating him without anyone on your team being hit by a single one of his Ripple Singularity attacks.`,
  acquisition: `Defeat King Midas in Challenge Mode without any members of the team being hit by a Ripple Singularity during the length of the fight in Dr. Aeon's Strike Force.`,
  links: [
    { title: `Can't Touch This Badge`, href: 'https://homecoming.wiki/wiki/Can%27t_Touch_This_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sf-aeon.png',
}
