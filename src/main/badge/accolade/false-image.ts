import { BadgeData } from 'coh-content-db'

export const FalseImage: BadgeData = {
  type: 'ACCOLADE',
  key: 'false-image',
  setTitle: { id: 614 },
  name: [
    { alignment: 'H', value: 'False Image' },
    { alignment: 'V', value: 'Mirage' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `Perhaps Scirocco is secretly envious of your break to the side of honor, but he still cannot brook your betrayal.` },
    { alignment: 'V', value: `You have chosen Scirocco's cause. He will not forget your noble gesture.` },
  ],
  acquisition: `Complete Scirocco's patron story arc`,
  notes: `Completing the patron story arc 'A Wind Called Serafina' from Scirocco in Grandville unlocks the Mu Mastery patron power pool as well as awarding this badge.`,
  links: [
    { title: 'False Image Badge', href: 'https://homecoming.wiki/wiki/False_Image_Badge' },
    { title: 'Mirage Badge', href: 'https://homecoming.wiki/wiki/Mirage_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/false-image.png' },
  ],
}
