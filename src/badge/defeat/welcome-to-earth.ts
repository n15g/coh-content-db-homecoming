import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WelcomeToEarth: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "welcome-to-earth",
    setTitleId: 2389,
    names: [
        {value: "Welcome to Earth"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/welcome-to-earth.png"}],
    badgeText: [
        {value: "You have destroyed a Rikti Drop Ship, proving that it can be done."}
    ],
    acquisition: "Destroy a Rikti Drop Ship.",
    links: [
        {title: "Welcome to Earth Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Welcome_to_Earth_Badge"}
    ],
};
