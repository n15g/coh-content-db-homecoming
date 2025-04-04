import { BadgeData } from 'coh-content-db'
import { CaptainJamesHarlan } from '../../contact/captain-james-harlan'

export const EarnedTheStatesmanStar: BadgeData = {
  type: 'accolade',
  key: 'earned-the-statesman-star',
  setTitleId: [179],
  name: [
    { alignment: 'hero', value: 'Earned the Statesman Star' },
    { alignment: 'villain', value: 'Denied the Statesman Star' },
  ],
  morality: 'heroic',
  badgeText: `Your Terra Volta experience has altered your powers in ways no one could imagine.`,
  effect: 'Awards a character respecification.',
  links: [
    { title: 'Earned the Statesman Star Badge', href: 'https://homecoming.wiki/wiki/Earned_the_Statesman_Star_Badge' },
    { title: 'Denied the Statesman Star Badge', href: 'https://homecoming.wiki/wiki/Denied_the_Statesman_Star_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/earned-the-statesman-star.png',
  requirements: [
    { key: 'second-terra-volta-respecification-trial', type: 'TASK_FORCE', missionName: 'Second Terra Volta Respecification Trial', contactKey: CaptainJamesHarlan.key },
  ],
}
