import { BadgeData } from 'coh-content-db'
import { Professor } from '../day-job/professor'
import { Intern } from '../day-job/intern'

export const Scientist: BadgeData = {
  type: 'accolade',
  key: 'scientist',
  setTitleId: [1066],
  name: [
    { alignment: 'hero', value: 'Scientist' },
    { alignment: 'villain', value: 'Crackpot' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `Your studies at the Universities of Paragon City and work with Portal Corps have earned you the Scientist Accolade.
While logged out at a University or inside a Portal Corps building you will earn charges of Sleep Gas.`,
    },
    { alignment: 'villain', value: `Eager to distance themselves from your villainous self, Portal Corps and the universities of Paragon City have quickly denounced you as merely a Crackpot.` },
  ],
  links: [
    { title: 'Scientist Badge', href: 'https://homecoming.wiki/wiki/Scientist_Badge' },
    { title: 'Crackpot Badge', href: 'https://homecoming.wiki/wiki/Crackpot_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/scientist.png',
  requirements: [
    { key: Professor.key, type: 'badge', badgeKey: Professor.key },
    { key: Intern.key, type: 'badge', badgeKey: Intern.key },
  ],
}
