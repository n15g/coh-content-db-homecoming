import { BadgeData } from 'coh-content-db'

export const AvidReader: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'avid-reader',
  setTitle: { id: 1716 },
  name: [
    { value: 'Avid Reader' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You take the time to listen to what everyone has to say very carefully, and read everything '
        + 'you run across. As a reward for this remarkable trait, you have more than earned this badge.',
    },
  ],
  acquisition: `Read Prometheus' dialogue regarding the Well of the Furies after completing an Incarnate Trial, or read all of Rothstein's dialogue in the Praetorian tutorial.`,
  links: [
    { title: 'Avid Reader Badge', href: 'https://homecoming.wiki/wiki/Avid_Reader_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/avid-reader.png' },
  ],
}
