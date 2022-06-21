

const BASE_URL = 'https://www.boredapi.com/api/';



export const getActivitiesApi = async () => {
    try {
        const route = BASE_URL + 'activity';
        const res = await fetch(route);
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}
