import { BadgeData } from 'coh-content-db'
import { Positron } from '../../contact/positron'

export const DamHero: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'dam-hero',
  setTitle: { id: 1590 },
  name: [
    { alignment: 'H', value: 'Dam Hero' },
    { alignment: 'V', value: 'Dam Villain' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: `You've saved Faultline from not one, but three separate villain groups intent on using the dam to cause carnage on a massive scale.`,
    },
    {
      alignment: 'V', value: `You've saved Faultline from not one, but three separate villain groups intent on using the dam to cause carnage on a massive scale. Perhaps one day you'll finish what they started.`,
    },
  ],
  links: [
    { title: 'Dam Hero Badge', href: 'https://homecoming.wiki/wiki/Dam_Hero_Badge' },
    { title: 'Dam Villain Badge', href: 'https://homecoming.wiki/wiki/Dam_Villain_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/dam-hero.png',
  requirements: [
    { key: 'positron-task-force-pt2', type: 'ARC', missionName: 'Positron Task Force Part Two', contactKey: Positron.key },
  ],
}
