import mongooose from 'mongoose'

const Post = new mongooose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
})

const PostSchema = mongooose.model('Post', Post);

export default PostSchema;