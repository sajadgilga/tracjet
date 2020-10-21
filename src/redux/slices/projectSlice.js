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
		title: 'سامانه تحت وب بهین سورس',
		description: 'طراحی، برنامه‌ریزی سازمانی، توسعه و پشتیبانی سامانه تحت وب مدیریت فروش محصولات',
		createdDate: '2020-08-31T19:30:00.000Z',
		startDate: '2020-08-31T19:30:00.000Z',
		deadline: '2020-11-16T20:30:00.000Z',
		state: ProjectStates.ACTIVE,
		notificationOffset: 7,
		phases: [
			{
				title: 'فاز اول',
				description: 'طراحی BPMN',
				deadline: '2020-09-15T19:30:00.000Z',
				hardDeadline: '2020-09-15T19:30:00.000Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'طراحی BPMN ',
						point: 10,
						priority: ProjectPriorities.HIGH
					}
				]
			},
			{
				title: 'فاز دوم',
				description: 'نیازمندی‌های اصلی سامانه',
				deadline: '2020-10-20T20:30:00.000Z',
				hardDeadline: '2020-10-20T20:30:00.000Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'پیاده سازی سامانه سمت خریدار',
						point: 10,
						priority: ProjectPriorities.HIGH
					}
				]
			},
			{
				title: 'فاز سوم',
				description: 'تکمیل سامانه تحت وب',
				deadline: '2020-11-16T20:30:00.000Z',
				hardDeadline: '2020-11-16T20:30:00.000Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'پیاده سازی سامانه سمت فروشنده',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						name: 'نهایی کردن نسخه',
						point: 10,
						priority: ProjectPriorities.HIGH
					}
				]
			}
		]
	},
	{
		title: 'پلتفرم دادیار',
		description: 'پلتفرم مشاوره حقوقی آنلاین موسسه حقوقی دانش پژوهان',
		createdDate: '2020-09-01T19:30:00.000Z',
		startDate: '2020-09-01T19:30:00.000Z',
		deadline: '2020-12-29T20:30:00.000Z',
		state: ProjectStates.ACTIVE,
		notificationOffset: 7,
		phases: [
			{
				title: 'فاز اول',
				description: 'طراحی UI/UX اپلیکیشن',
				deadline: '2020-10-21T20:30:00.000Z',
				hardDeadline: '2020-10-21T20:30:00.000Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'طراحی صفحات مرتبط با کاربر',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						name: 'صفحات مرتبط با مشاور',
						point: 10,
						priority: ProjectPriorities.MEDIUM
					}
				]
			},
			{
				title: 'فاز دوم',
				description: 'برقراری مشاوره چت متنی',
				deadline: '2020-11-14T20:30:00.000Z',
				hardDeadline: '2020-11-14T20:30:00.000Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'پیاده سازی فرآیند مشاوره با چت متنی',
						point: 10,
						priority: ProjectPriorities.HIGH
					}
				]
			},
			{
				title: 'فاز سوم',
				description: 'برقراری مشاوره صوتی و تصویری',
				deadline: '2020-11-29T20:30:00.000Z',
				hardDeadline: '2020-11-29T20:30:00.000Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'پیاده سازی فرآیند مشاوره  صوتی',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						name: 'پیاده سازی فرآیند مشاوره  تصویری',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						name: 'پیاده سازی فرآیند مشاوره  Voip',
						point: 5,
						priority: ProjectPriorities.LOW
					}
				]
			},
			{
				title: 'فاز چهارم',
				description: 'پیاده‌سازی کامل پلتفرم دادیار',
				deadline: '2020-12-29T20:30:00.000Z',
				hardDeadline: '2020-12-29T20:30:00.000Z',
				notificationOffset: 7,
				requirements: [
					{
						name: 'سامانه تیکت',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						name: 'اعزام کارشناس',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						name: 'تنظیم اوراق قضایی',
						point: 10,
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
