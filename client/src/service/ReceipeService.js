export default {
    getReceipes : () => {
        return fetch('http://localhost:5000/user/receipes', 
            {
                withCredentials: true,
                credentials: 'include'
            })
            .then(res => {
                if(res.status !== 401)
                    return res.json().then(data => data);
                else 
                    return {message : {msgBody : 'UnAuthorized'}, msgError : true};
            });
        },
        
    postReceipe : receipe => {
        return fetch('http://localhost:5000/user/receipes', 
            {
                method: 'post',
                body: JSON.stringify(receipe),
                headers: {'Content-Type' : 'application/json'},
                withCredentials: true,
                credentials: 'include'
            })
            .then(res => {
                if(res.status !== 401)
                    return res.json().then(data => data);
                else 
                    return {message : {msgBody : 'UnAuthorized'}, msgError : true};
            });
    },

    postAllReceipes : receipe => {
        return fetch('http://localhost:5000/all-receipes', 
            {
                method: 'post',
                body: JSON.stringify(receipe),
                headers: {'Content-Type' : 'application/json'},
                withCredentials: true,
                credentials: 'include'
            })
            .then(res => {
                if(res.status !== 401)
                    return res.json().then(data => data);
                else 
                    return {message : {msgBody : 'UnAuthorized'}, msgError : true};
            });
    },

    getAllReceipes : () => {
        return fetch('http://localhost:5000/all-receipes', 
            {
                withCredentials: true,
                credentials: 'include'
            })
            .then(res => {
                if(res.status !== 401)
                    return res.json().then(data => data);
                else 
                    return {message : {msgBody : 'UnAuthorized'}, msgError : true};
            });
    }
};