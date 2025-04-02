import { BadgeData } from 'coh-content-db'
import { Professor } from '../day-job/professor'
import { CreyTestSubject } from '../day-job/crey-test-subject'

export const Whistleblower: BadgeData = {
  type: 'ACCOLADE',
  key: 'whistleblower',
  setTitle: { id: 1077 },
  name: [
    { alignment: 'H', value: 'Whistleblower' },
    { alignment: 'V', value: 'Crey Scientist' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `Crey Industries has been hard at work removing your name from all your research and publicly denying the corporate secrets you've revealed.` },
    {
      alignment: 'V',
      value: `Your work with Crey Industries and studies in various fields has earned you the Crey Scientist Accolade.
While logged out in the Crey Industries building or in a University you will earn additional charges for your Sleep Grenade power.`,
    },
  ],
  links: [
    { title: 'Whistleblower Badge', href: 'https://homecoming.wiki/wiki/Whistleblower_Badge' },
    { title: 'Crey Scientist Badge', href: 'https://homecoming.wiki/wiki/Crey_Scientist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/whistleblower.png' },
  ],
  requirements: [
    { key: Professor.key, type: 'BADGE', badgeKey: Professor.key },
    { key: CreyTestSubject.key, type: 'BADGE', badgeKey: CreyTestSubject.key },
  ],
}
