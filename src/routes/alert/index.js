import express from 'express';
import axios from 'axios';

const route = () => {
    const router = new express.Router();

    router.route('/').post((req, res) => {
        if(typeof req.body !== 'object'){
            return res.sendStatus(404)
        }else{
            var config = {
                method: 'post',
                url: process.env.webhook,
                headers: { 
                  'Content-Type': 'text/plain'
                },
                data : req.body
              };
              
              axios(config)
              .then(function (response) {
                return res.json({status:true})
              })
              .catch(function (error) {
                console.log(error);
                return res.json({status:false})
              });
        }
        
    });
    return router;
}

export default {
    route,
    routePrefix: `/alert`
}