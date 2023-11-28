import { baseUrl } from './meta.js'
console.dir(baseUrl);

Deno.serve({
   port: 80,//mode == 'live' ? 4000 : 4001,
   hostname: 'alma.aicone.id'//hostName[mode],
},
   function handler(res, info) {  
      const url = new URL(res.url)
      console.log(res);
      const headers = new Headers();
      headers.set('Location', `https://${url.host}${url.pathname}`)
      const response = new Response('the body',
         { status: 301, headers}
      )
      return response
   }
);