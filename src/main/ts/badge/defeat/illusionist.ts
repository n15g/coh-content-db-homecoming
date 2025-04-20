import { BadgeData } from 'coh-content-db'

export const Illusionist: BadgeData = {
  type: 'defeat',
  key: 'illusionist',
  setTitleId: [56],
  name: 'Illusionist',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have learned enough from fighting the Illusionists of the Carnival of Shadows to know the real from the fake.`,
  acquisition: 'Defeat 100 Illusionists, Phantasms, and Dark Servants summoned by Master Illusionists.',
  links: [
    { title: 'Illusionist Badge', href: 'https://homecoming.wiki/wiki/Illusionist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/illusionist.png',
}
