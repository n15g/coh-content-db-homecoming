import { BadgeData } from 'coh-content-db'
import { Scirocco } from '../../contact/scirocco'

export const FalseImage: BadgeData = {
  type: 'ACCOLADE',
  key: 'false-image',
  setTitle: { id: 614 },
  name: [
    { alignment: 'H', value: 'False Image' },
    { alignment: 'V', value: 'Mirage' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `Perhaps Scirocco is secretly envious of your break to the side of honor, but he still cannot brook your betrayal.` },
    { alignment: 'V', value: `You have chosen Scirocco's cause. He will not forget your noble gesture.` },
  ],
  effect: `Awards the Mu Mastery patron power.`,
  links: [
    { title: 'False Image Badge', href: 'https://homecoming.wiki/wiki/False_Image_Badge' },
    { title: 'Mirage Badge', href: 'https://homecoming.wiki/wiki/Mirage_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/false-image.png',
  requirements: [
    { key: 'a-wind-called-serafina', type: 'ARC', missionName: 'A Wind Called Serafina', contactKey: Scirocco.key },
  ],
}
