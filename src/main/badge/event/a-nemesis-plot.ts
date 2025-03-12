import { BadgeData } from 'coh-content-db'

export const ANemesisPlot: BadgeData = {
  type: 'EVENT',
  key: 'a-nemesis-plot',
  setTitle: { id: 2210 },
  name: [
    { value: 'A Nemesis Plot' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve tangled with Nemesis himself (at least, you think so) during the Nemesis Plot event.' },
  ],
  acquisition: `Be in the zone when Nemesis is defeated during the Nemesis Plot event.`,
  notes: `This event can be triggered by completing the last mission of Signature Story Arc 2 (Pandora's Box, Part 5), available from Heldenjaeger for heroes, and from Inconspicuous Female 39757 for villains. Completing this mission will trigger a Nemesis invasion in a zone matching the arc's alignment.`,
  links: [
    { title: 'A Nemesis Plot Badge', href: 'https://homecoming.wiki/wiki/A_Nemesis_Plot_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/a-nemesis-plot.png' }],
}
