import { BadgeData } from 'coh-content-db'

export const BugHunter: BadgeData = {
  type: 'accolade',
  key: 'bug-hunter',
  setTitleId: [215],
  name: 'Bug Hunter',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Your stalwart efforts in tracking down and eradicating evil bugs have been recognized by the Paragon City authorities. Thanks to you, the City of Heroes has its pests firmly under control.`,
  acquisition: `Awarded by the game developers for reporting a serious and/or game-breaking bug.`,
  notes: `**This badge is not included in badge totals.**`,
  links: [
    { title: 'Bug Hunter Badge', href: 'https://homecoming.wiki/wiki/Bug_Hunter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/bug-hunter.png',
  ignoreInTotals: true,
}
