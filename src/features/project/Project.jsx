import React from 'react';
import { CSSTransition } from 'react-transition-group';
import CustomTimeLine from './CustomTimeLine';

const ProjectColors = {
	EXTREME: { bg: 'extreme', text: 'white', secondaryText: 'grey-super-white' },
	DANGER: { bg: 'danger', text: 'black', secondaryText: 'grey' },
	WARNING: { bg: 'fine', text: 'black', secondaryText: 'grey' },
	SAFE: { bg: 'safe', text: 'black', secondaryText: 'grey' }
};

const getColor = (state) => {
	if (state[0]) return ProjectColors.SAFE;
	else if (state[1]) return ProjectColors.WARNING;
	else return ProjectColors.DANGER;
};

const Project = ({ title, description = '', deadline, state, phases, expanded, expand, startDate }) => {
	const now = new Date();
	let currentPhase = phases[0];
	for (const phase in phases) {
		if (now < new Date(phases[phase].deadline)) {
			currentPhase = phases[phase];
			break;
		}
	}
	const startDateObject = new Date(startDate);
	const deadlineObject = new Date(deadline);
	const nextdeadline = new Date(currentPhase.deadline);
	const safeZone = new Date(currentPhase.deadline);
	const warningZone = new Date(currentPhase.deadline);
	safeZone.setTime(nextdeadline.getTime() - 2 * currentPhase.notificationOffset * 24 * 3600 * 1000);
	warningZone.setTime(nextdeadline.getTime() - currentPhase.notificationOffset * 24 * 3600 * 1000);
	const timeState = [ now < safeZone, now < warningZone ];

	const timeleft = Math.floor((nextdeadline.getTime() - now.getTime()) / (1000 * 3600 * 24));
	let progress =
		(now.getTime() - startDateObject.getTime()) / (deadlineObject.getTime() - startDateObject.getTime()) * 100;
	if (progress < 0 || progress > 100) progress = 100;
	if (progress < 25) progress = 25;
	return (
		<div>
			<div className="flex text-right mb-0.1" onClick={expand}>
				<div
					className={`opacity-0.9 hover:opacity-100 bg-${getColor(timeState)
						.bg} flex justify-between bg-white 
					 h-40 cursor-pointer z-10`}
					style={{
						width: `${progress}%`
					}}
				/>
				{phases.map((phase, idx) => {
					let phaseBreakPoint =
						(new Date(phase.deadline).getTime() - startDateObject.getTime()) /
						(deadlineObject.getTime() - startDateObject.getTime()) *
						100;
					return (
						<div
							className="border-r-2 absolute z-400 h-40 shadow-md hover:shadow-xl"
							style={{ width: `${phaseBreakPoint}%` }}
						/>
					);
				})}
				<div className="w-full md:w-1/2 lg:w-2/5 xl:w-128 flex justify-between absolute z-500">
					<div className={`text-${getColor(timeState).text} text-lg font-black`}>
						<div
							className="inline-grid w-40 max-w-40 -ml-38 text-center"
							style={{ transform: 'rotate(-90deg)', transformOrigin: '100% 0%' }}
						>
							{title}
						</div>
					</div>

					<div className="flex flex-col text-left">
						<div className={`text-2xl font-extrabold text-${getColor(timeState).text} flex flex-row`}>
							<div> روز مانده </div>
							<div> {timeleft} </div>
						</div>
						<div className={`text-md text-${getColor(timeState).text}`}>
							{nextdeadline.toLocaleDateString('fa-IR')}
						</div>
					</div>

					<div className="flex flex-col justify-end">
						<div className={`text-sm text-${getColor(timeState).secondaryText}`}>
							ددلاین: {deadlineObject.toLocaleDateString('fa-IR')}
						</div>
					</div>
				</div>

				<div className={`bg-${getColor(timeState).bg}-fade flex-1 flex flex-col`}>
					<div className="my-auto" />
				</div>
			</div>
			<CSSTransition in={expanded} timeout={600} classNames="project-slider" unmountOnExit>
				<div>
					<CustomTimeLine phases={phases} currentPhase={currentPhase} />
				</div>
			</CSSTransition>
		</div>
	);
};

export default Project;
