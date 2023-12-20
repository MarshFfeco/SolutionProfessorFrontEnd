import {https} from './config';
import {type RequestLogin} from '../types/ProfessorRequest';
import {type ResponseLogin} from '../types/ProfessorResponse';
import {type AxiosResponse} from 'axios';

export class Professor {

	readonly config = {headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'},
	};

	body;

	constructor(body: RequestLogin) {
		this.body = body;
	}

	get url() {
		return 'professor/login';
	}

	async login() {
		https.post(this.url, this.body, this.config)
			.then((value) =>  value)
			.catch((error) => error);
	}
}
