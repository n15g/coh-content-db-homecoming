import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SpectralAnomaly: IBadgeData = {
    type: BadgeType.EVENT,
    key: "spectral-anomaly",
    setTitleId: 2504,
    names: [
        {value: "Spectral Anomaly"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have defeated 5 spectral werewolves, lycanthropic beasts who embraced undeath in order to become one with the night eternal.`},
    ],
    acquisition: `Defeat 5 Spectral Werewolves during the Halloween event.`,
	notes: `This badge rewards 2 prismatic aether particles.`,
    links: [
        {title: "Spectral Anomaly Badge", href: "https://homecoming.wiki/wiki/Spectral_Anomaly_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/spectral-anomaly.png"}]
};