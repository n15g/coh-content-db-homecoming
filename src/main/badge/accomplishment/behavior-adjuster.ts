import { BadgeData } from 'coh-content-db'

export const BehaviorAdjuster: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'behavior-adjuster',
  setTitle: { id: 1974 },
  name: [
    { value: 'Behavior Adjuster' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have completed the Incarnate Trial: Behavioral Adjustment Facility.' },
  ],
  acquisition: 'Complete the Behavioral Adjustment Facility Incarnate Trial',
  links: [
    { title: 'Behavior Adjuster Badge', href: 'https://homecoming.wiki/wiki/Behavior_Adjuster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/behavior-adjuster.png' },
  ],
}
