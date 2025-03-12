import { BadgeData } from 'coh-content-db'

export const TonightsTopStory: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'tonights-top-story',
  setTitle: { id: 2076 },
  name: [
    { value: 'Tonight\'s Top Story' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Maelstrom arrived during the raid on TPN Campus to send a message of his own: that he would '
        + 'not allow the Incarnates to spread their \'lies\'. Not only did his efforts fail, but you also '
        + 'managed to defeat him handily, adding his humiliating defeats to your message to the people of '
        + 'Praetoria.',
    },
  ],
  acquisition: 'Defeat Maelstrom within four minutes during each of his three encounters',
  links: [
    { title: 'Tonight\'s Top Story Badge', href: 'https://homecoming.wiki/wiki/Tonight%27s_Top_Story_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-tpn.png' },
  ],
}
