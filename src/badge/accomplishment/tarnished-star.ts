import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const TarnishedStar: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "tarnished-star",
    setTitleId: 2438,
    names: [
        {value: "Tarnished Star"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
	{value: `Despite all the villains you've put away, you couldn't help becoming one yourself. You were reminded of this when Manticore ambushed you in the Zig during Clamor and Bile's breakout, in front of the nineteen high-profile arrests you'd made yourself. Undeterred, you added him and his Shining Star lackeys to your list of accomplishments.`}
    ],
    acquisition: "Earned in Doc Buzzsaw's The Freakish Lab of Dr. Vahzilok arc by filling every jail cell in The Zig during your life as a hero, before becoming a villain and releasing Bile. See wiki link for details.",
    links: [
	{title: "Tarnished Star Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Tarnished_Star_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tarnished-star.png"}
    ],
};
