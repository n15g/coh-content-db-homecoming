import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TakedownArtist: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "takedown-artist",
    setTitleId: 1420,
    names: [
        {value: "Takedown Artist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You've taken down one of the big guys in the Syndicate.  Hey, is that a bull's-eye on your " +
                "back?"
        }
    ],
    acquisition: "Complete the Syndicate Takedown zone event in Imperial City",
    links: [
        {title: "Takedown Artist Badge", href: "https://homecoming.wiki/wiki/Takedown_Artist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/takedown-artist.png"}
    ],
};
