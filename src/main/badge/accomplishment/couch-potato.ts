import { BadgeData } from 'coh-content-db'

export const CouchPotato: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'couch-potato',
  setTitle: { id: 347 },
  name: [
    { value: 'Couch Potato' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You destroyed a shipment of books on the word of the Television, and then blamed it all on '
        + 'video games.',
    },
  ],
  acquisition: 'Complete the Destroy books for Television mission from Television',
  links: [
    { title: 'Couch Potato Badge', href: 'https://homecoming.wiki/wiki/Couch_Potato_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-9.png' },
  ],
}
