import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Foruns from 'App/Models/Forun'

export default class ForunsController {
  public async adiciona({ request }: HttpContextContract) {
    // const data = request.only(["email", "password"])
    const data = await request.only(["texto"])
    const user = await Foruns.create(data)
    return user
  }
  public async show({ params, response }: HttpContextContract) {
    try {
      const ForunDB = await Foruns.findOrFail(params.id)
      return ForunDB
    } catch (error) {   
      response.status(400).send("Texto não encontrado!!!")
    }
  }
}
