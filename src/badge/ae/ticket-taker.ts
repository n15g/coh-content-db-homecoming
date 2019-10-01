import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TicketTaker: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "ticket-taker",
    names: [
        {value: "Ticket Taker"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned your first Mission Architect Ticket from defeating enemies in Architect missions."}],
    acquisition: "Defeat enemies and complete Mission Architect missions to earn a single ticket.",
    notes: "Tickets earned from other players running your arcs count toward this badge for all characters on the account." +
        " So, while not technically an account level badge, this badge can effectively become account level when you have earned one ticket this way.",
    links: [
        {title: "Ticket Taker Badge", href: "https://paragonwiki.com/wiki/Ticket_Taker_Badge"}
    ],
    imageKeys: [{value: "core.ae.ticket-taker"}]
};
