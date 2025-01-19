

export async function getItems(page: number, pageSize: number, itemName?: string) {
    let url = `https://hcateringback-dev.unitbeandev.com/api/wh/items?page=${page+100}&pageSize=${pageSize}`

    if(itemName) url = `https://hcateringback-dev.unitbeandev.com/api/wh/items?page=${page+100}&pageSize=${pageSize}&itemName=${itemName}`
    try {
        const responce = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNzQwNjgwMH0.KhUyHGWJsYoOjewnBd9CDqZeTDRkWpKdqEL2E5C3T9Nx4vQw4LiEzAujm0P7_ti19vfh2cNJ1MqMM2RbSPIsLw',
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
        })
        const data = await responce.json()
        console.log("req = ", data)
        return data
    } catch (error) {
        console.log("Ошибка : " + error)
    }
}

export async function logIn() {
    const param = {login: 'admin', password: 'admin'}
    try {
        const responce = await fetch('https://hcateringback-dev.unitbeandev.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify(param)
        })
        const data = await responce.json()
        console.log("auth = ", data)
        return data
    } catch (error) {
        console.log("Ошибка : " + error)
    }
    
}


export async function createItem(params: 
    {name: string, description: string, code: string, measurement_units: string}) {
    try {
        const responce = await fetch('https://hcateringback-dev.unitbeandev.com/api/wh/items', {
            method: 'POST',
            headers: {
                'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNzQwNjgwMH0.KhUyHGWJsYoOjewnBd9CDqZeTDRkWpKdqEL2E5C3T9Nx4vQw4LiEzAujm0P7_ti19vfh2cNJ1MqMM2RbSPIsLw',
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify(params)
        })
        const data = await responce.json()
        console.log("create = ", data)
        return data
    } catch (error) {
        console.log("Ошибка : " + error)
    }
    
}

export async function changeItem({params, id}: 
    {params: {name: string, description: string, code: string, measurement_units: string},
    id: string
}) {
    try {
        const responce = await fetch(`https://hcateringback-dev.unitbeandev.com/api/wh/items/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNzQwNjgwMH0.KhUyHGWJsYoOjewnBd9CDqZeTDRkWpKdqEL2E5C3T9Nx4vQw4LiEzAujm0P7_ti19vfh2cNJ1MqMM2RbSPIsLw',
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify(params)
        })
        const data = await responce.json()
        console.log("change = ", data)
        return data
    } catch (error) {
        console.log("Ошибка : " + error)
    }
    
}