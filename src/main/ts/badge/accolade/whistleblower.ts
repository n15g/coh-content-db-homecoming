import { BadgeData } from 'coh-content-db'
import { Professor } from '../day-job/professor'
import { CreyTestSubject } from '../day-job/crey-test-subject'

export const Whistleblower: BadgeData = {
  type: 'accolade',
  key: 'whistleblower',
  setTitleId: [1077],
  name: [
    { alignment: 'hero', value: 'Whistleblower' },
    { alignment: 'villain', value: 'Crey Scientist' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `Crey Industries has been hard at work removing your name from all your research and publicly denying the corporate secrets you've revealed.` },
    {
      alignment: 'villain', value: `Your work with Crey Industries and studies in various fields has earned you the Crey Scientist Accolade.
While logged out in the Crey Industries building or in a University you will earn additional charges for your Sleep Grenade power.`,
    },
  ],
  links: [
    { title: 'Whistleblower Badge', href: 'https://homecoming.wiki/wiki/Whistleblower_Badge' },
    { title: 'Crey Scientist Badge', href: 'https://homecoming.wiki/wiki/Crey_Scientist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/whistleblower.png',
  requirements: [
    { key: Professor.key, type: 'badge', badgeKey: Professor.key },
    { key: CreyTestSubject.key, type: 'badge', badgeKey: CreyTestSubject.key },
  ],
}
