/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   client.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Jianjin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/04/17 23:19:24 by Jianjin Wu        #+#    #+#             */
/*   Updated: 2018/04/17 23:54:13 by Jianjin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const net = require('net')
const debug = require('debug')('app:client')

class Client {
  async download(infoHash, node) {
    let socket = new net.Socket()
    socket.connect(node.port, node.host, function () {
      // socket.pipe(wire).pipe(socket)
      debug('success: ')
    })
    
    socket.on('error', function (err) {
      debug('err: ', err)
    })
    
    socket.on('timeout', function (err) {
      debug('timeout: ', err)
    })

    socket.once('close', function () {
      debug('close')
    })
  }
  
}

module.exports = new Client()
