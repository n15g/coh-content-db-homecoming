import { BadgeData } from 'coh-content-db'

export const ColdHandOfDeath: BadgeData = {
  type: 'day-job',
  key: 'cold-hand-of-death',
  setTitleId: [2178],
  name: 'Cold Hand of Death',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have withstood the oppressive influence of Mot, at great cost to your health and sanity and earning you the mark of the Cold Hand of Death.
Logging out within Dark Astoria will increase your defense and resistance to cold and negative attacks for a short time after you log back in.`,
  acquisition: 'Log out inside Dark Astoria for 100 hours.',
  links: [
    { title: 'Cold Hand of Death Badge', href: 'https://homecoming.wiki/wiki/Cold_Hand_of_Death_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/cold-hand-of-death.png',
}
