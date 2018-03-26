import mongoose, { Schema } from 'mongoose'

const produtoSchema = new Schema({
  nome: {
    type: String
  },
  descricao: {
    type: String
  },
  foto: {
    type: String
  },
  preco: {
    type: Number
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

produtoSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      foto: this.foto,
      preco: this.preco,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Produto', produtoSchema)

export const schema = model.schema
export default model
