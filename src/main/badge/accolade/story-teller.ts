import { BadgeData } from 'coh-content-db'
import { GordonBower } from '../../contact/gordon-bower'
import { SkipperLeGrange } from '../../contact/skipper-legrange'
import { KellyNemmers } from '../../contact/kelly-nemmers'
import { BuckSalinger } from '../../contact/buck-salinger'

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
  effect: `Awards 20 reward merits.`,
  links: [
    { title: 'Story Teller Badge', href: 'https://homecoming.wiki/wiki/Story_Teller_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
  ],
  requirements: [
    { key: 'piercing-the-veil', type: 'ARC', missionName: 'Piercing the Veil', contactKey: GordonBower.key },
    { key: 'the-war-of-the-fir-bolg', type: 'ARC', missionName: 'The War of the Fir Bolg', contactKey: SkipperLeGrange.key },
    { key: 'hatreds-hungry-heart', type: 'ARC', missionName: `Hatred's Hungry Heart`, contactKey: KellyNemmers.key },
    { key: 'crossing-over', type: 'ARC', missionName: `Crossing Over`, contactKey: BuckSalinger.key },
  ],
}
