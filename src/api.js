import Axios from 'axios'
const baseURL = 'http://localhost:12306';


const getAjax = Axios.create({
    method:'GET',
    baseURL
});
const postAjax = Axios.create({
    method:'POST',
    baseURL
})

export default{
    getBlogList(){
        return getAjax.get('/getBlogList',{
            params:{
               
            }
        })
    },
}