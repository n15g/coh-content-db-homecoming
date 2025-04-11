import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const HydraStomper: BadgeData = {
  type: 'accomplishment',
  key: 'hydra-stomper',
  setTitleId: [2021],
  name: 'Hydra Stomper',
  morality: 'all',
  badgeText: 'You went into the depths of the sewers beneath Paragon City and took down two monstrous Hydra heads!',
  acquisition: 'Complete the Death from Below Sewer Trial.',
  links: [
    { title: 'Hydra Stomper Badge', href: 'https://homecoming.wiki/wiki/Hydra_Stomper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/hydra-stomper.png',
  requirements: [
    { key: 'death-from-below-trial', type: 'TASK_FORCE', missionName: 'Death from Below Trial', contactKey: TeamUpTeleporter.key },
  ],
}
