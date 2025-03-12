import { BadgeData } from 'coh-content-db'

export const StrikeBuster: BadgeData = {
  type: 'DEFEAT',
  key: 'strike-buster',
  setTitle: { id: 300 },
  name: [
    { value: 'Strike Buster' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'The Scrapyarders have taken to calling you the Strike Buster.' },
  ],
  acquisition: 'Defeat 200 Scrapyarders (Sharkhead Isle)',
  links: [
    { title: 'Strike Buster Badge', href: 'https://homecoming.wiki/wiki/Strike_Buster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/scrapyarder.png' },
  ],
}
