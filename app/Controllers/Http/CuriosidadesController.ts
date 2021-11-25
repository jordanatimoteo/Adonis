import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Curiosidades from 'App/Models/Curiosidade'

export default class CuriosidadesController {
  public async adiciona_curisidades({ request }: HttpContextContract){
    // const data = request.only(["email", "password"])
    const data = await request.only(["textos"])
    const curiosidade = await Curiosidades.create(data)
    return curiosidade
  }
  public async show({ params, response }: HttpContextContract) {
    try {
      const CuriosidadeDB = await Curiosidades.findOrFail(params.id)
      return CuriosidadeDB
    } catch (error) {   
      response.status(400).send("Texto não encontrado!!!")
    }
  }
}
