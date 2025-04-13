import { BadgeData } from 'coh-content-db'
import { SweepsWeekHeroNameVsTheRogueIsles } from '../../mission/sweeps-week-heroname-vs-the-rogue-isles'

export const VillainOfTheMonth: BadgeData = {
  type: 'accomplishment',
  key: 'villain-of-the-month',
  setTitleId: [2259],
  name: 'Villain of the Month',
  morality: 'villainous',
  badgeText: `You publically put down every attempt on your life, and then smashed apart Wu Yin's entire operation. The public is calling you the 'Villain of the Month'.`,
  links: [
    { title: 'Villain of the Month Badge', href: 'https://homecoming.wiki/wiki/Villain_of_the_Month_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png',
  requirements: [
    { key: SweepsWeekHeroNameVsTheRogueIsles.key, type: 'mission', missionKey: SweepsWeekHeroNameVsTheRogueIsles.key },
  ],
}
