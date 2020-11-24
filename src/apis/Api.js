import axios from 'axios';
let qs = require('qs');
    const baseURI = "https://sugoku.herokuapp.com";
    const getBoardNumber=(endPoint, parameter) =>{
        console.log('From API',parameter);
        let urlForGet = `${baseURI}/${endPoint}?difficulty=${parameter}`
        return axios.get(urlForGet);
    }
    /**
     * This method will take payload and return the solution base on the payload. 
     * @param {endPoint, Payload} endPoint 
     */
    const getSolution= (endPoint,body) =>{
        const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '');
        const encodeParams = (params) => 
        Object.keys(params).map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`).join('&');
        let config = {
        method: 'post',
        url: `${baseURI}/${endPoint}`,
        headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : encodeParams(body)
            };
    return axios(config);
    }

export { getBoardNumber, getSolution};


