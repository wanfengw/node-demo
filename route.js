const route = (handle,route)=>{
    console.log('this is the '+JSON.stringify(route))
    if (typeof handle[route] === 'function'){
        handle[route]();
    }else{
        console.log('404')
    }
}
exports.route = route