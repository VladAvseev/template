import { AxiosResponse } from 'axios';
import { apiDelete, apiGet, apiPost, apiPut } from './api';
import { TTimelineTask } from '../types/TTimelineTask';
import { TWarning } from '../types/TWarning';
import { TDependencyType } from '../types/TDependencyType';


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
	getUsers: '/users',
	getAllTasks: '/all_tasks',
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
					deadline: string,
					responsible: {
						id: number,
						name: string,
					},
					warnings: TWarning[]
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
	status: string,
	title: string,
	description: string,
	created_at: string,
	deadline: string,
	responsible: {
			user_id: number,
			username: string
	}
	warnings: TWarning[],
	is_archieved: boolean,
	days_for_completion: number,
	actual_start_date: string,
	actual_finish_date: string,
	actual_completion_days: number | null,
	dependencies: [
		{
			type: string,
			task_name: string,
			status: string,
			task_id: number,
			warnings: TWarning[],
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
	tasks: TTimelineTask[];
};

export type TEditTaskParams = {
	task_id: number,
	task_data: {
		title: string,
		description: string,
		deadline: string, // dd.mm.yyyy
		responsible_user_id: number,
		days_for_completion: number,
		dependedependencies: {
			task_id: number;
			type: TDependencyType;
		}[]
	}
};

export type TCreateTaskParams = {
	title: string,
	description: string,
	deadline: string, // dd.mm.yyyy
	responsible_id: number,
	estimated_completion_time: number,
	dependedependencies: {
		task_id: number;
		depend: TDependencyType
	}[]
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

export type TGetUsersResponse = {
	users: {
		id: number,
		name: string,
	}[],
};

export type TGetAllTasksResponse = {
	tasks: {
		id: number,
		title: string,
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
	getUsers: (): Promise<AxiosResponse<TGetUsersResponse>> => {
		return apiGet(URLS.getUsers);
	},
	getAllTasks: (): Promise<AxiosResponse<TGetAllTasksResponse>> => {
		return apiGet(URLS.getAllTasks);
	},
};