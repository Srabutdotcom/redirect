import { baseUrl } from './meta.js'
console.dir(baseUrl);
debugger;

Deno.serve({
   port: 443,//mode == 'live' ? 4000 : 4001,
   hostname: 'alma.aicone.id',//hostName[mode],
   cert: Deno.readTextFileSync('../../etc/ssl/freessl/certificate.crt'),
   key: Deno.readTextFileSync('../../etc/ssl/freessl/private.key'),
},
   function handler(res, info) {
      debugger;
      const url = new URL(res.url)
      console.log(res);
      /* const headers = new Headers();
      headers.set('Location', `https://${url.host}${url.pathname}`) */
      return new Response("Hello, World!",
         /* {  
            status: 302,
            headers
         } */
      );
   }
);