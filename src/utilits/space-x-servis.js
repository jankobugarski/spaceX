let url='https://api.spacexdata.com'
let version="/v3"

 function getCompanyLaunches(){
    return fetch(`${url}${version}/launches`).then(result=>result.json())
}

    

function getCompanyInfo(){

return fetch(`${url}${version}/info`).then(result=>result.json())

}


export {getCompanyLaunches, 
    getCompanyInfo
}
