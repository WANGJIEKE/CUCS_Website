const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    // id: String,
    no: Number,
    userName: String,
    title: String,
    info: String,
    time: String,
    img: {data: Buffer, contentType: String },
    userid: String,
    comments: Array,
});

module.exports = Image = mongoose.model('Image', imageSchema, 'upload-file');
