import React from 'react';

const ProjectColors = {
	EXTREME: '',
	DANGER: { bg: 'red', text: 'white', secondaryText: 'grey-super-white' },
	WARNING: { bg: 'yellow', text: 'black', secondaryText: 'grey' },
	SAFE: { bg: 'green', text: 'white', secondaryText: 'grey-super-white' }
};

const getColor = (state) => {
	if (state[0]) return ProjectColors.SAFE;
	else if (state[1]) return ProjectColors.WARNING;
	else return ProjectColors.DANGER;
};

const Project = ({ title, description = '', deadline, state, phases }) => {
	const now = new Date();
	let currentPhase = phases[0];
	for (const phase in phases) {
		if (now < phase) {
			currentPhase = phase;
			break;
		}
	}
	const nextdeadline = new Date(currentPhase.deadline);
	const safeZone = new Date(currentPhase.deadline);
	const warningZone = new Date(currentPhase.deadline);
	safeZone.setDate(nextdeadline.getDate() - 2 * currentPhase.notificationOffset);
	warningZone.setDate(nextdeadline.getDate() - currentPhase.notificationOffset);
	const timeState = [ now < safeZone, now < warningZone ];
	return (
		<div className="flex flex-col m-5 text-right p-5">
			<div className="text-black text-3xl font-black">{title}</div>
			<div
				className={`rounded-lg opacity-0.9 hover:opacity-100 bg-${getColor(timeState)
					.bg} flex justify-between p-5 bg-white shadow-md hover:shadow-xl h-40 cursor-pointer`}
			>
				<div className="flex flex-col">
					<div className={`text-5xl font-extrabold text-${getColor(timeState).text}`}>Time Left</div>
					<div className={`text-lg text-${getColor(timeState).text}`}>{currentPhase.deadline}</div>
				</div>

				<div className="flex flex-col justify-end">
					<div className={`text-sm text-${getColor(timeState).secondaryText}`}>deadline: {deadline}</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
