import { BadgeData } from 'coh-content-db'

export const TimeKeeper: BadgeData = {
  type: 'event',
  key: 'time-keeper',
  setTitleId: [2525],
  name: 'Time Keeper',
  morality: 'all',
  badgeText: `The way forward into the future is paved on the efforts undertaken by those in the past.
You've paid your respects to history by opening many of the time capsules found during the City of Heroes Anniversary Event. Time to focus your sight on the future!`,
  acquisition: `Open a total of 25 time capsules spread throughout Paragon City, the Rogue Isles, and Praetoria during the anniversary event.`,
  links: [
    { title: 'Time Keeper Badge', href: 'https://homecoming.wiki/wiki/Time_Keeper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/time-keeper.png',
}
