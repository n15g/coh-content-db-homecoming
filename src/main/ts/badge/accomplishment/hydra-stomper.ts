import { BadgeData } from 'coh-content-db'
import { DeathFromBelow } from '../../mission/death-from-below'

export const HydraStomper: BadgeData = {
  type: 'accomplishment',
  key: 'hydra-stomper',
  setTitleId: [2021],
  name: 'Hydra Stomper',
  morality: 'all',
  badgeText: 'You went into the depths of the sewers beneath Paragon City and took down two monstrous Hydra heads!',
  links: [
    { title: 'Hydra Stomper Badge', href: 'https://homecoming.wiki/wiki/Hydra_Stomper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/hydra-stomper.png',
  requirements: [
    { key: DeathFromBelow.key, type: 'mission', missionKey: DeathFromBelow.key },
  ],
}
