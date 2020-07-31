import api from "./auth"

export const fetchCollaborators = async (page = 0) => (
	new Promise((resolve, reject) => {
		api.get(`/api/collaborator?page=${page}`)
			.then(res => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err)
			});
	})
);

export const fetchCollaborator = async (id) => (
	new Promise((resolve, reject) => {
		api.get(`/api/collaborator/${id}`)
			.then(res => resolve(res.data))
			.catch(err => reject(err));
	})
);

export const deleteCollaborator = async (id) => (
	new Promise((resolve, reject) => {
		api.delete(`/api/collaborator/${id}`)
			.then(() => resolve())
			.catch(err => reject(err));
	})
);

export const saveCollaborator = async (collaborator) => (
	new Promise((resolve, reject) => {
		api.post('/api/collaborator', collaborator)
			.then(res => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err)
			});
	})
);

export const updateCollaborator = async (collaborator) => (
new Promise((resolve, reject) => {
	api.put(`/api/collaborator/${collaborator.id}`, collaborator)
		.then(res => {
			resolve(res.data);
		})
		.catch((err) => {
			reject(err)
		});
	})
);
