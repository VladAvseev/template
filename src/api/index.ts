import { AxiosResponse } from 'axios';
import { apiDelete, apiGet, apiPost, apiPut } from './api';
import { TTimelineTask } from '../types/TTimelineTask';


export const URLS = {
	getDashboardTasks: '/dashboard_tasks',
	getTaskDescription: '/task_description',
	getTimelineTasks: '/timeline_tasks',
	getTimelineDependencies: '/timeline_dependencies',
	editTask: '/edit_task',
	createTask: '/create_task',
	addTaskDependency: '/add_task_dependency',
	delTaskDependency: '/del_task_dependency',
	updateTaskStatus: '/update_task_status',
	editDeadline: '/edit_deadline',
	archieveTask: '/archieve_task',
	getEmployes: '/employes',
};

export type TGetDashboardTasksResponse = {
	progress: number,
	statuses: [
		{
			status_name: string,
			tasks: [
				{
					id: number,
					title: string,
					deadline: string,  // dd.mm.yyyy
					delay_deadline: string | null, // dd.mm.yyyy
					responsible: {
						user_id: number,
						username: string,
					},
					is_archieved: boolean,
				}
			]
		}
	]
};

export type TGetTaskDescriptionParams = {
	task_id: number,
};

export type TGetTaskDescriptionResponse = {
	id: number,
	title: string,
	description: string,
	created_at: string, // dd.mm.yyyy
	deadline: string, // dd.mm.yyyy
	responsible: {
			user_id: number,
			username: string
	}
	is_archieved: boolean,
	delay_deadline: string | null, // dd.mm.yyyy
	estimated_completion_time: number,
	dependencies: [
		{
			type: string,
			task_name: string,
			status: string,
			task_id: number,
		}
	]
};

export type TGetTimelineTasksResponse = {
	tasks: TTimelineTask[]
};

export type TGetTimelineDependenciesParams = {
	task_id: number,
};

export type TGetTimelineDependenciesResponse = {
	tasks: [
		{
			id: number,
			dependency_type: string,
			title: string,
			deadline: string, // dd.mm.yyyy
			delay_deadline: string | null, // dd.mm.yyyy
			supposed_start_date: string, // dd.mm.yyyy
			responsible: {
					user_id: number,
					username: string
			}
		}
	],
};

export type TEditTaskParams = {
	task_id: number,
	task_data: {
		title: string,
		description: string,
		deadline: string, // dd.mm.yyyy
		responsible: {
				user_id: number
		}
		is_archieved: boolean,
		delay_deadline: string | null, // dd.mm.yyyy
		supposed_start_date: string, // dd.mm.yyyy
	}
};

export type TCreateTaskParams = {
	title: string,
	description: string,
	deadline: string, // dd.mm.yyyy
	responsible: {
			user_id: number,
	},
	estimated_completion_time: number,
};

export type TAddTaskDependencyParams = {
	task_id: number, // задача, которой устанавливается зависимость
	depends_of_task_id: number, // задача, от которой зависит
};

export type TDelTaskDependencyParams = {
	task_id: number, // задача, которой устанавливается зависимость
	depends_of_task_id: number, // задача, от которой зависит
};

export type TUpdateTaskStatusParams = {
	task_id: number,
	new_status: string
};

export type TEditDeadlineParams = {
	task_id: number,
	new_deadline: string, // dd.mm.yyyy
};

export type TArchieveTaskParams = {
	task_id: number,
};

export type TGetEmployesParams = {
	task_id: number,
};

export type TGetEmployesResponse = {
	users: {
		id: number,
		name: string,
	}[],
};

export const api = {
	getDashboardTasks: (): Promise<AxiosResponse<TGetDashboardTasksResponse>> => {
		return apiGet(URLS.getDashboardTasks);
	},
	getTaskDescription: (params: TGetTaskDescriptionParams): Promise<AxiosResponse<TGetTaskDescriptionResponse>> => {
		return apiGet(URLS.getTaskDescription, params);
	},
	getTimelineTasks: (): Promise<AxiosResponse<TGetTimelineTasksResponse>> => {
		return apiGet(URLS.getTimelineTasks);
	},
	getTimelineDependencies: (params: TGetTimelineDependenciesParams): Promise<AxiosResponse<TGetTimelineDependenciesResponse>> => {
		return apiGet(URLS.getTimelineDependencies, params);
	},
	editTask: (params: TEditTaskParams): Promise<AxiosResponse> => {
		return apiPut(URLS.editTask, params);
	},
	createTask: (params: TCreateTaskParams): Promise<AxiosResponse> => {
		return apiPut(URLS.createTask, params);
	},
	addTaskDependency: (params: TAddTaskDependencyParams): Promise<AxiosResponse> => {
		return apiPost(URLS.addTaskDependency, params);
	},
	delTaskDependency: (params: TDelTaskDependencyParams): Promise<AxiosResponse> => {
		return apiDelete(URLS.delTaskDependency, params);
	},
	updateTaskStatus: (params: TUpdateTaskStatusParams): Promise<AxiosResponse> => {
		return apiPut(URLS.updateTaskStatus, params);
	},
	editDeadline: (params: TEditDeadlineParams): Promise<AxiosResponse> => {
		return apiPut(URLS.editDeadline, params);
	},
	archieveTask: (params: TArchieveTaskParams): Promise<AxiosResponse> => {
		return apiPost(URLS.archieveTask, params);
	},
	getEmployes: (params: TGetEmployesParams): Promise<AxiosResponse<TGetEmployesResponse>> => {
		return apiGet(URLS.getEmployes, params);
	},
};