import { BadgeData, mapLink } from 'coh-content-db'
import { Croatoa } from '../../map/croatoa'

export const StoryTeller: BadgeData = {
  type: 'ACCOLADE',
  key: 'story-teller',
  setTitle: { id: 2375 },
  name: [
    { value: 'Story Teller' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this accolade by completing every story arc within Croatoa.` },
  ],
  acquisition: `Complete every story arc in ${mapLink(Croatoa)}`,
  notes: `This badge rewards 20 reward merits.`,
  links: [
    { title: 'Story Teller Badge', href: 'https://homecoming.wiki/wiki/Story_Teller_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
  ],
}
