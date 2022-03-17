/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

/**
 * URL of the workbox.
 * https://developer.chrome.com/docs/workbox/modules/workbox-sw/
 */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

/**
 * Url https://developer.chrome.com/docs/workbox/modules/workbox-background-sync/
 * ESto es para guardar los datos en el cache al hacer una peticion POST, DELETE, PUT
 */
workbox.loadModule('workbox-background-sync');


/**
 * registerRoute: Registrar rutas es como el fetch y ver el request.url
 * 
 * CacheFirst: Cahce primero y si no lo encuentra busca en el network
 * NetworkFirst: Busca en el network primero y si no lo encuentra en el cache 
 * NetworkOnly: Busca en el network solamente
 * 
 * BackgroundSyncPlugin: Para guardar los datos en el cache al hacer una peticion POST, DELETE, PUT
 */
const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

/** 
 * Guardar todos los archivos que estaran en el build
 */
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

/**
 * Todo lo que se del serive worker de manera manual
 * Lo puedo hacer aqui sin problemas 
 * 
 * self.addEventListener('push', e => {})
 * self.addEventListener('fetch', e => {})
 */

/**
 * Registro de rutas una a una 
 * 
 * Abajo se encuentra mejor optimizada
 */
// registerRoute(
//   new RegExp('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'),
//   new CacheFirst() 
// )

// registerRoute(
//   new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css'),
//   new CacheFirst() 
// )

// registerRoute(
//   new RegExp('http://localhost:4000/api/auth/renew'),
//   new NetworkFirst() 
// )

// registerRoute(
//   new RegExp('http://localhost:4000/api/events'),
//   new NetworkFirst() 
// )

/**
 * Optimizado
 * 
 */
const cacheNetworkFirst = [
  '/api/auth/renew',
  '/api/events'
]
registerRoute(
  ({ request, url }) => {
    console.log({ request, url });
    if(cacheNetworkFirst.includes(url.pathname)) return true;

    /**
     * Esto debe devolver un true o false, para aplicarlo lo siguiente
     * 
     */
    return false;
  },
  new NetworkFirst() 
)

const cacheFirstNetwork = [
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css'
]

registerRoute(
  ({ request, url }) => {
    
    if(cacheFirstNetwork.includes(url.href)) return true;

    /**
     * Esto debe devolver un true o false, para aplicarlo lo siguiente
     * 
     */
    return false;
  },
  new CacheFirst() 
)


/**
 * Posteo offline
 * 
 * Esto lo puedo ver en el indexdDB
 * 
 * Al hacer una peticion POST del evento y no haya internet esto se guarda en el 
 * indexDB y al recuperrar la conexion de initernet esto hace un posteo de los datos
 * de manera automatica (al recargar el navegador)
 */
const bgSyncPlugin = new BackgroundSyncPlugin('posteoes-offline', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  new RegExp('http://localhost:4000/api/events'),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
)

registerRoute(
  new RegExp('http://localhost:4000/api/events/'),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'PUT'
)

registerRoute(
  new RegExp('http://localhost:4000/api/events/'),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'DELETE'
)
