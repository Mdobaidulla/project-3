import axios from 'axios';
    const baseURI = "https://sugoku.herokuapp.com";
    const getBoardNumber=(endPoint, parameter="easy") =>{
        let url = `${baseURI}/${endPoint}?difficulty=${parameter}`
        return axios.get(url);
    }
    
export { getBoardNumber };
