import { BadgeData } from 'coh-content-db'

export const BugHunter: BadgeData = {
  type: 'ACCOLADE',
  key: 'bug-hunter',
  setTitle: { id: 215 },
  name: [
    { value: 'Bug Hunter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `Your stalwart efforts in tracking down and eradicating evil bugs have been recognized by the Paragon City authorities. Thanks to you, the City of Heroes has its pests firmly under control.` },
  ],
  acquisition: `Awarded by the game developers for reporting a serious and/or game-breaking bug.`,
  notes: `**This badge is not included in badge totals.**`,
  links: [
    { title: 'Bug Hunter Badge', href: 'https://homecoming.wiki/wiki/Bug_Hunter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/bug-hunter.png' },
  ],
  ignoreInTotals: true,
}
