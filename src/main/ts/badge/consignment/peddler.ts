import { BadgeData } from 'coh-content-db'

export const Peddler: BadgeData = {
  type: 'consignment',
  key: 'peddler',
  setTitleId: [814],
  name: 'Peddler',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 500 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 500 items on the Black Market.` },
  ],
  acquisition: '500 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Peddler Badge', href: 'https://homecoming.wiki/wiki/Peddler_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/peddler.png',
}
