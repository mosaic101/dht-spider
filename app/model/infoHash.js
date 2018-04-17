/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   infoHash.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Jianjin Wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/04/17 22:19:24 by Jianjin Wu        #+#    #+#             */
/*   Updated: 2018/04/17 23:54:01 by Jianjin Wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InfoHashSchema = new Schema({
  infoHash:  String,
}, {
  timestamps: true
})

InfoHashSchema.index({ infoHash: 1 })

module.exports = mongoose.model('infoHash', InfoHashSchema)
