import { BadgeData } from 'coh-content-db'
import { PositronTaskForcePartTwo } from '../../mission/positron-task-force-part-two'

export const DamHero: BadgeData = {
  type: 'accomplishment',
  key: 'dam-hero',
  setTitleId: [1590],
  name: [
    { alignment: 'hero', value: 'Dam Hero' },
    { alignment: 'villain', value: 'Dam Villain' },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You've saved Faultline from not one, but three separate villain groups intent on using the dam to cause carnage on a massive scale.` },
    { alignment: 'villain', value: `You've saved Faultline from not one, but three separate villain groups intent on using the dam to cause carnage on a massive scale. Perhaps one day you'll finish what they started.` },
  ],
  links: [
    { title: 'Dam Hero Badge', href: 'https://homecoming.wiki/wiki/Dam_Hero_Badge' },
    { title: 'Dam Villain Badge', href: 'https://homecoming.wiki/wiki/Dam_Villain_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/dam-hero.png',
  requirements: [
    { key: PositronTaskForcePartTwo.key, type: 'mission', missionKey: PositronTaskForcePartTwo.key },
  ],
}
