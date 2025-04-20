import { BadgeData } from 'coh-content-db'
import { VirgilTarikossStrikeForce } from '../../mission/virgil-tarikoss-strike-force'

export const BinderOfBeasts: BadgeData = {
  type: 'accomplishment',
  key: 'binder-of-beasts',
  setTitleId: [512],
  name: 'Binder of Beasts',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You fought and defeated the dreaded demon Bat'Zul, the Beast Beneath the Mountain.`,
  links: [
    { title: 'Binder of Beasts Badge', href: 'https://homecoming.wiki/wiki/Binder_of_Beasts_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/binder-of-beasts.png',
  requirements: [
    { key: VirgilTarikossStrikeForce.key, type: 'mission', missionKey: VirgilTarikossStrikeForce.key },
  ],
}
