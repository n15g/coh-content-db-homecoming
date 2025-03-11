import { BadgeData } from 'coh-content-db'

export const TicketTaker: BadgeData = {
  type: 'AE',
  key: 'ticket-taker',
  setTitle: { id: 1265 },
  name: [
    { value: 'Ticket Taker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve earned your first Mission Architect Ticket from defeating enemies in Architect missions.' }],
  acquisition: 'Defeat enemies and complete Mission Architect missions to earn a single ticket.',
  notes: 'Tickets earned from other players running your arcs count toward this badge for all characters on the account.'
    + ' So, while not technically an account level badge, this badge can effectively become account level when you have earned one ticket this way.',
  links: [
    { title: 'Ticket Taker Badge', href: 'https://homecoming.wiki/wiki/Ticket_Taker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/ticket-taker.png' }],
}
