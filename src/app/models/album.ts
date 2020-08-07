import mongoose, { Schema } from 'mongoose';

const AlbumSchema: Schema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String, required: true }
  //updatedAt: { type: Date, default: Date.now }
});

export const Albums = mongoose.model('albums', AlbumSchema);