import { BadgeData } from 'coh-content-db'
import { DefeatSelestar } from '../../mission/defeat-selestar'

export const MageHunter: BadgeData = {
  type: 'accomplishment',
  key: 'mage-hunter',
  setTitleId: [345],
  name: 'Mage Hunter',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `That's one less creepy mystic to get in your way.`,
  links: [
    { title: 'Mage Hunter Badge', href: 'https://homecoming.wiki/wiki/Mage_Hunter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-8.png',
  requirements: [
    { key: DefeatSelestar.key, type: 'mission', missionKey: DefeatSelestar.key },
  ],
}
