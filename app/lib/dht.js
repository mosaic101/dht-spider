/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   dht.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Jianjin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/04/12 22:30:38 by Jianjin Wu        #+#    #+#             */
/*   Updated: 2018/04/17 23:29:16 by Jianjin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const DHT = require('bittorrent-dht')
const magnet = require('magnet-uri')
const debug = require('debug')('app:dht')

const uri = 'magnet:?xt=urn:btih:e3811b9539cacff680e418124272177c47477157'
const parsed = magnet(uri)

const client = require('./client')
debug(parsed.infoHash) // 'e3811b9539cacff680e418124272177c47477157'

const dht = new DHT()

dht.listen(20000, function () {
  debug('now listening')
})

// Emitted when a potential peer is found. 
dht.on('peer', function (peer, infoHash, from) {
  debug('found potential peer ' + peer.host + ':' + peer.port + ' through ' + from.address + ':' + from.port)
  client.download(infoHash, peer)
})

// Emitted when a peer announces itself in order to be stored in the DHT.
dht.on('announce', function (peer, infoHash) {
  debug(`announce: ${peer}, ${infoHash}`)
})

// Emitted when the DHT finds a new node.
dht.on('node', function (node) {
  debug('node: ' + node.host + ':' + node.port)
  // TODO:
  
})

dht.on('error', function (err) { 
  debug(`err: ${err}`)
})
// find peers for the given torrent info hash
dht.lookup(parsed.infoHash)
