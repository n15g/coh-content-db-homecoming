import { BadgeData } from 'coh-content-db'

export const LambdaLeader: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'lambda-leader',
  setTitle: { id: 1983 },
  name: [
    { value: 'Lambda Leader' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have completed the Incarnate Trial: Lambda Sector.' },
  ],
  acquisition: 'Complete the Lambda Sector Incarnate Trial',
  links: [
    { title: 'Lambda Leader Badge', href: 'https://homecoming.wiki/wiki/Lambda_Leader_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/lambda-leader.png' },
  ],
}
