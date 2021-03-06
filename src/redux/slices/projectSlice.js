import { createSlice } from '@reduxjs/toolkit';

export const ProjectStates = {
	ACTIVE: 0,
	INACTIVE: 1,
	PENDING: 3,
	DONE: 2
};

export const ProjectPriorities = {
	CRUCIAL: 0,
	HIGH: 1,
	MEDIUM: 2,
	LOW: 3,
	WHY_THE_HELL_DO_WE_EVEN_DO_THIS: 4
};

const projectInitialState = [
	{
		title: 'example',
		description: 'this is a project example',
		createdDate: '2020-05-09T18:16:12.463Z',
		startDate: '2020-05-09T18:16:12.463Z',
		deadline: '2021-02-10T18:16:12.463Z',
		state: ProjectStates.ACTIVE,
		notificationOffset: 7,
		phases: [
			{
				title: 'phase 1',
				description: 'this is phase 1',
				deadline: '2020-11-10T18:16:12.463Z',
				hardDeadline: '2020-11-10T18:16:12.463Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'goal 1',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						name: 'goal 2',
						point: 13,
						priority: ProjectPriorities.MEDIUM
					}
				]
			}
		]
	},
	{
		title: 'example2',
		description: 'this is a project example',
		createdDate: '2020-01-01T18:16:12.463Z',
		startDate: '2020-01-01T18:16:12.463Z',
		deadline: '2020-11-06T18:16:12.463Z',
		state: ProjectStates.ACTIVE,
		notificationOffset: 7,
		phases: [
			{
				title: 'phase 1',
				description: 'this is phase 1',
				deadline: '2020-10-06T18:16:12.463Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'goal 1',
						point: 11,
						priority: ProjectPriorities.HIGH
					},
					{
						name: 'goal 2',
						point: 13,
						priority: ProjectPriorities.MEDIUM
					}
				]
			},
			{
				title: 'phase 2',
				description: 'this is phase 1',
				deadline: '2020-11-01T18:16:12.463Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'goal 1',
						point: 11,
						priority: ProjectPriorities.HIGH
					},
					{
						name: 'goal 2',
						point: 13,
						priority: ProjectPriorities.MEDIUM
					}
				]
			}
		]
	}
];

export const projectSlice = createSlice({
	name: 'projects',
	initialState: projectInitialState,
	reducers: {
		addProject: (state, action) => {
			return [ ...state, action.payload ];
		},
		removeProject: (state, action) => {},
		changeProject: (state, action) => {}
	}
});

export const { addProject, removeProject, changeProject } = projectSlice.actions;

export const projectSelect = (state) => state.projects;

export default projectSlice.reducer;
