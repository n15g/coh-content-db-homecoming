import { BadgeData } from 'coh-content-db'

export const Clubber: BadgeData = {
  type: 'day-job',
  key: 'clubber',
  setTitleId: [1038],
  name: 'Clubber',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You spent your free time mingling with both the heroes of Paragon City and the villains of the Rogue Isles in Pocket D earning yourself the Clubber Day Job.
Logging out in Pocket D will earn you a bonus to your out of combat Recovery, when you log back in, for a short time.`,
  acquisition: 'Log out inside Pocket D for 100 hours.',
  links: [
    { title: 'Clubber Badge', href: 'https://homecoming.wiki/wiki/Clubber_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/clubber.png',
}
