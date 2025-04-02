import { BadgeData } from 'coh-content-db'
import { TinMageMarkII } from '../../contact/tin-mage-mark-ii'

export const AlphaStruck: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'alpha-struck',
  setTitle: { id: 1938 },
  name: 'Alpha Struck',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You took the fight to the Praetorians and stopped their plans for a large-scale invasion into the heart of Atlas Park and Grandville!',
  links: [
    { title: 'Alpha Struck Badge', href: 'https://homecoming.wiki/wiki/Alpha_Struck_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/alpha-struck.png',
  requirements: [
    { key: 'tin-mage-mark-ii-task-force', type: 'TASK_FORCE', missionName: 'Tin Mage Mark II Task Force', contactKey: TinMageMarkII.key },
  ],
}
