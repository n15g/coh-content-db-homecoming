import { BadgeData } from 'coh-content-db'

export const VillainDisruptor: BadgeData = {
  type: 'defeat',
  key: 'villain-disruptor',
  setTitleId: [645],
  name: 'Villain Disruptor',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `It doesn't matter who or where; you will stop anyone who threatens your city.` },
    { alignment: 'villain', value: `Having a reputation for beating down villains has actually helped more than hurt you in the Rogue Isles.` },
  ],
  acquisition: 'Defeat 25 named bank heist or jailbreak villains during Safeguard missions.',
  links: [
    { title: 'Villain Disruptor Badge', href: 'https://homecoming.wiki/wiki/Villain_Disruptor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/villain-disruptor.png',
}
