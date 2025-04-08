import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const SpinDoctor: BadgeData = {
  type: 'accomplishment',
  key: 'spin-doctor',
  setTitleId: [2072],
  name: 'Spin Doctor',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: TPN Campus.',
  links: [
    { title: 'Spin Doctor Badge', href: 'https://homecoming.wiki/wiki/Spin_Doctor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spin-doctor.png',
  requirements: [
    { key: 'tpnct', type: 'TASK_FORCE', missionName: 'TPN Campus Trial', contactKey: TeamUpTeleporter.key },
  ],
}
