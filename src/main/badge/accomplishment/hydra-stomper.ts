import { BadgeData } from 'coh-content-db'

export const HydraStomper: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'hydra-stomper',
  setTitle: { id: 2021 },
  name: [
    { value: 'Hydra Stomper' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You went into the depths of the sewers beneath Paragon City and took down two monstrous Hydra '
        + 'heads!',
    },
  ],
  acquisition: 'Complete the Death from Below Sewer Trial',
  links: [
    { title: 'Hydra Stomper Badge', href: 'https://homecoming.wiki/wiki/Hydra_Stomper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/hydra-stomper.png' },
  ],
}
