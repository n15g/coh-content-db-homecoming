import { BadgeData } from 'coh-content-db'
import { StealAlloyFromSilverMantis } from '../../mission/steal-alloy-from-silver-mantis'

export const PartyCrasher: BadgeData = {
  type: 'accomplishment',
  key: 'party-crasher',
  setTitleId: [344],
  name: 'Party Crasher',
  morality: 'villainous',
  badgeText: `You crashed a rave and stole a piece of the alloy which makes up Silver Mantis' armor.`,
  links: [
    { title: 'Party Crasher Badge', href: 'https://homecoming.wiki/wiki/Party_Crasher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-8.png',
  requirements: [
    { key: StealAlloyFromSilverMantis.key, type: 'mission', missionKey: StealAlloyFromSilverMantis.key },
  ],
}
