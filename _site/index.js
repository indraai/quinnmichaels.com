#!/usr/bin/env node
// COPYRIGHT (c)2022 QUINN MICHAELS. ALL RIGHTS RESERVED.
// Main controller for the Deva user interface. This loads the main source module
//  and the associated Deva with the fast web server static routes.

const {version} = require('./package.json');
const path = require('path');
const fs = require('fs');
const os = require('os');
const axios = require('axios');
const fast = require('fastify')({
  logger:false,
});
const fastStatic = require('@fastify/static');

const port = 8080;

// get network interfaces
const ipv4 = [];
const networks = os.networkInterfaces();
for (let x in networks) {
  networks[x].forEach(net => {
    let label = '🔶 EXTERNAL';
    if (net.internal) label = '🔷 INTERNAL';
    if (net.family == 'IPv4') ipv4.push(`${label}: http://${net.address}`);
  })
}

const line_break = `░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`;
const devaFlash = (opts) => `
${line_break}
${opts.ip}
`;

// create the static routes for the local server.
// public is used to deliver local assets
const staticRoutes = [
  {
    root: path.join(__dirname, 'assets'),
    prefix: '/assets/',
    prefixAvoidTrailingSlash: true,
    list: {
      format: 'json',
      names: ['index', 'index.json', '/', '']
    },
  },
]

// register static routes with the fast server.
staticRoutes.forEach(rt => {
  fast.register(fastStatic, rt);
})

// deliver the default index.html file for the interface.
const routes = [
  {
    method: 'GET',
    url: '/',
    handler: (req,reply) => {
      return reply.sendFile('index.html', path.join(__dirname));
    },
  },
]

// register the routes for the server.
routes.forEach(rt => {
  fast.route(rt);
});

// launch fast server to listen to the port rom the vars scope
fast.listen({port}).then(() => {
  // log the main server information to the console
  console.log(devaFlash({
    ip: ipv4.map(ip => `${ip}:${port}`).join('\n\r'),
  }));

}).catch(console.error);
