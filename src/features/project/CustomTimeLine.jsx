import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const CustomTimeLine = ({ phases, currentPhase }) => {
	return (
		<Timeline align="alternate">
			{phases.map((phase, idx) => {
				const current = currentPhase === phase;
				return (
					<TimelineItem key={idx}>
						<TimelineOppositeContent>
							<Typography variant="body2" color={`${current ? '' : 'textSecondary'}`}>
								{new Date(phase.deadline).toLocaleDateString('fa-IR')}
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color={`${current ? 'primary' : 'grey'}`} />
							{idx !== phases.length - 1 ? <TimelineConnector /> : <div />}
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={current ? 3 : 0} className="px-4 py-2">
								<div className={`text-md font-bold text-${current ? 'black' : 'grey-light'}`}>
									{phase.title}
								</div>
								<div className={`text-sm text-${current ? 'black' : 'grey-light'}`}>
									{phase.requirements.map((req, reqIdx) => (
										<div key={reqIdx}>
											{req.name} - {req.priority}
										</div>
									))}
								</div>
							</Paper>
						</TimelineContent>
					</TimelineItem>
				);
			})}
		</Timeline>
	);
};

export default CustomTimeLine;
