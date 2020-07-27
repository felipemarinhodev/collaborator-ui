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