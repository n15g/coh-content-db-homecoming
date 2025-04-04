import { BadgeData } from 'coh-content-db'

export const Villainous: BadgeData = {
  type: 'architect-entertainment',
  key: 'villainous',
  setTitleId: [1222],
  name: 'Villainous',
  morality: 'villainous',
  badgeText: `You've earned the "Villainous" badge by playing an Architect mission marked as Villainous content.`,
  acquisition: 'Complete one Mission Architect arc marked as Villainous content.',
  notes: `This badge is only awarded to characters of the villain or rogue alignments.

Although credit for this badge may be earned by heroes or vigilantes, the badge will not be awarded to a character until they change alignment.`,
  links: [
    { title: 'Villainous Badge', href: 'https://homecoming.wiki/wiki/Villainous_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/villainous.png',
}
