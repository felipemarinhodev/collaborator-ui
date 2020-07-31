import api from "./auth"

export const fetchCollaborators = async () => (
	new Promise((resolve, reject) => {
		api.get('/api/collaborator')
			.then(res => {
				console.log('fetchCollaborators res', res);
				resolve(res.data);
			})
			.catch((err) => {
				reject(err)
			});
	})
)

export const fetchCollaborator = async (id) => (
	new Promise((resolve, reject) => {
		api.get(`/api/collaborator/${id}`)
			.then(res => resolve(res.data))
			.catch(err => reject(err));
	})
)

export const saveCollaborator = async (collaborator) => (
	new Promise((resolve, reject) => {
		api.post('/api/collaborator', collaborator)
			.then(res => {
				console.log('saveCollaborator res', res);
				resolve(res.data);
			})
			.catch((err) => {
				reject(err)
			});
	})
)