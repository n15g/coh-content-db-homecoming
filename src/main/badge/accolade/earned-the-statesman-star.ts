import { BadgeData } from 'coh-content-db'
import { CaptainJamesHarlan } from '../../contact/captain-james-harlan'

export const EarnedTheStatesmanStar: BadgeData = {
  type: 'ACCOLADE',
  key: 'earned-the-statesman-star',
  setTitle: { id: 179 },
  name: [
    { alignment: 'H', value: 'Earned the Statesman Star' },
    { alignment: 'V', value: 'Denied the Statesman Star' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `Your Terra Volta experience has altered your powers in ways no one could imagine.` },
  ],
  effect: 'Awards a character respecification.',
  links: [
    { title: 'Earned the Statesman Star Badge', href: 'https://homecoming.wiki/wiki/Earned_the_Statesman_Star_Badge' },
    { title: 'Denied the Statesman Star Badge', href: 'https://homecoming.wiki/wiki/Denied_the_Statesman_Star_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/earned-the-statesman-star.png' },
  ],
  requirements: [
    { key: 'second-terra-volta-respecification-trial', type: 'TASK_FORCE', missionName: 'Second Terra Volta Respecification Trial', contactKey: CaptainJamesHarlan.key },
  ],
}
