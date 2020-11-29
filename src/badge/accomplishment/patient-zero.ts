import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const PatientZero: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "patient-zero",
    setTitleId: 2439,
    names: [
        {value: "Patient Zero"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
	{value: `Doc Buzzsaw bit off more she could chew when she called out for help against Cortex, leading you into a whole new world of mad science and pushing fringe Freakshow members and desperate terminal Eidolons to evolve beyond their humanity as conscripts in a new cybertech army. Piecemeal owes their existence to you.`}
    ],
    acquisition: "Complete Doc Buzzsaw's arc, The Freakish Lab of Dr. Vahzilok.",
    links: [
	{title: "Patient Zero Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Patient_Zero_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/patient-zero.png"}
    ],
};
