import { fetchUrl, fetchUrlWithToken } from "./http";

const requestWrapper = async (request) => {
    try{
        const response = await request;
        const { status, message, data } = await response.json();
        return {
            error: status !== 'success',
            message,
            data
        }
    }catch(e){
        return {
            error: true,
            message: e.message
        }
    }
}

const AuthRequest = {
    async register({
        name,
        email,
        password
    }){
        return await requestWrapper(fetchUrl('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }));
    },

    async login({
        email,
        password
    }){
        return await requestWrapper(fetchUrl('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        }));
    },

    async profile(){
        return await requestWrapper(fetchUrlWithToken('/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }));
    }
}

const NoteRequest = {
    async getAll(){
        return await requestWrapper(fetchUrlWithToken('/notes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }));
    },

    async getArchived(){
        return await requestWrapper(fetchUrlWithToken('/notes/archived', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }));
    },

    async getById(noteId){
        return await requestWrapper(fetchUrlWithToken(`/notes/${noteId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }));
    },

    async create({
        title,
        body
    }){
        return await requestWrapper(fetchUrlWithToken('/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                body
            })
        }));
    },

    async archive(noteId){
        return await requestWrapper(fetchUrlWithToken(`/notes/${noteId}/archive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }));
    },

    async unArchive(noteId){
        return await requestWrapper(fetchUrlWithToken(`/notes/${noteId}/unarchive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }));
    },

    async remove(noteId){
        return await requestWrapper(fetchUrlWithToken(`/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }));
    }
}

export {
    AuthRequest,
    NoteRequest
}