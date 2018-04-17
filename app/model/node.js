/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   node.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Jianjin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/04/17 22:49:57 by Jianjin Wu        #+#    #+#             */
/*   Updated: 2018/04/17 23:52:15 by Jianjin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NodeSchema = new Schema({
  host:  String,
  port: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Node', NodeSchema)
