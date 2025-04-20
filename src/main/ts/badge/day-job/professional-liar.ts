import { BadgeData } from 'coh-content-db'

export const ProfessionalLiar: BadgeData = {
  type: 'day-job',
  key: 'professional-liar',
  setTitleId: [1054],
  name: [
    { alignment: 'hero', value: 'Professional Liar' },
    { alignment: 'villain', value: 'Demagogue' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `While you're no longer interested in spreading Arachnos lies, there doesn't seem to be many opportunities in a similar vein here in Paragon City.` },
    {
      alignment: 'villain', value: `You spend your free time spreading Arachnos propaganda to better manipulate and placate the masses of the Rogue Isles earning you the Demagogue Day Job.
Logging out in the Arachnos Building in Marconeville will earn you an Infamy bonus, upon each mission completion, for a short time.`,
    },
  ],
  acquisition: 'Log out at the Arachnos Building in Marconeville for 100 hours.',
  links: [
    { title: 'Professional Liar Badge', href: 'https://homecoming.wiki/wiki/Professional_Liar_Badge' },
    { title: 'Demagogue Badge', href: 'https://homecoming.wiki/wiki/Demagogue_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/professional-liar.png',
}
