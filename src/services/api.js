import {create} from "apisause"

const api = create({
    baseURL: "localhost:4000"
})

api.addResponsetransform(response => {
    if(!response.ok) throw response
})

export default api