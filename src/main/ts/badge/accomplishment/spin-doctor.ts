import { BadgeData } from 'coh-content-db'
import { TPNCampusTrial } from '../../mission/tpn-campus-trial'

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
    { key: TPNCampusTrial.key, type: 'mission', missionKey: TPNCampusTrial.key },
  ],
}
