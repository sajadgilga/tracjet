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
		Title: 'سامانه تحت وب بهین سورس',
		Description: 'طراحی، برنامه‌ریزی سازمانی، توسعه و پشتیبانی سامانه تحت وب مدیریت فروش محصولات',
		createdDate: '1399-06-11',
		startDate: '1399-06-11',
		deadline: '1399-08-27',
		state: ProjectStates.ACTIVE,
		notificationOffset: 7,
		phases: [
			{
				Title: 'فاز اول',
				description: 'طراحی BPMN',
				deadline: '1399-06-26',
				hardDeadline: '1399-06-26',
				notificationOffset: 7,
				requirements: [
					{
						Name: 'طراحی BPMN ',
						point: 10,
						priority: ProjectPriorities.HIGH
					}
				]
			},
			{
				Title: 'فاز دوم',
				description: 'نیازمندی‌های اصلی سامانه',
				deadline: '1399-07-30',
				hardDeadline: '1399-07-30',
				notificationOffset: 7,
				requirements: [
					{
						Name: 'پیاده سازی سامانه سمت خریدار',
						point: 10,
						priority: ProjectPriorities.HIGH
					}
				]
			},
			{
				Title: 'فاز سوم',
				description: 'تکمیل سامانه تحت وب',
				deadline: '1399-08-27',
				hardDeadline: '1399-08-27',
				notificationOffset: 7,
				requirements: [
					{
						Name: 'پیاده سازی سامانه سمت فروشنده',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						Name: 'نهایی کردن نسخه',
						point: 10,
						priority: ProjectPriorities.HIGH
					}
				]
			}
		]
	},
	{
		Title: 'پلتفرم دادیار',
		Description: 'پلتفرم مشاوره حقوقی آنلاین موسسه حقوقی دانش پژوهان',
		createdDate: '1399-06-12',
		startDate: '1399-06-12',
		deadline: '1399-10-10',
		state: ProjectStates.ACTIVE,
		notificationOffset: 7,
		phases: [
			{
				Title: 'فاز اول',
				description: 'طراحی UI/UX اپلیکیشن',
				deadline: '1399-08-01',
				hardDeadline: '1399-08-01',
				notificationOffset: 7,
				requirements: [
					{
						Name: 'طراحی صفحات مرتبط با کاربر',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						Name: 'صفحات مرتبط با مشاور',
						point: 10,
						priority: ProjectPriorities.MEDIUM
					}
				]
			},
			{
				Title: 'فاز دوم',
				description: 'برقراری مشاوره چت متنی',
				deadline: '1399-08-25',
				hardDeadline: '1399-08-25',
				notificationOffset: 7,
				requirements: [
					{
						Name: 'پیاده سازی فرآیند مشاوره با چت متنی',
						point: 10,
						priority: ProjectPriorities.HIGH
					}
				]
			},
			{
				Title: 'فاز سوم',
				description: 'برقراری مشاوره صوتی و تصویری',
				deadline: '1399-09-10',
				hardDeadline: '1399-09-10',
				notificationOffset: 7,
				requirements: [
					{
						Name: 'پیاده سازی فرآیند مشاوره  صوتی',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						Name: 'پیاده سازی فرآیند مشاوره  تصویری',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						Name: 'پیاده سازی فرآیند مشاوره  Voip',
						point: 5,
						priority: ProjectPriorities.LOW
					}
				]
			},
			{
				Title: 'فاز چهارم',
				description: 'پیاده‌سازی کامل پلتفرم دادیار',
				deadline: '1399-10-10',
				hardDeadline: '1399-10-10',
				notificationOffset: 7,
				requirements: [
					{
						Name: 'سامانه تیکت',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						Name: 'اعزام کارشناس',
						point: 10,
						priority: ProjectPriorities.HIGH
					},
					{
						Name: 'تنظیم اوراق قضایی',
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
