import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repositories/UserRepository";

// O controller tem a missão de lidar com as regras de negócios da criação dos users
class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        /**O método getCustomRepository serve para aceder ao repositório customizado
         * O repositório é um gestor de entidade,
         * Ele possui vários métodos para manipular uma entidade
         * Aqui estamos a passar os métodos de manipulação do User ao userRepositóry
         */
        const userRepository = getCustomRepository(UserRepository);

        // Antes de criar um user, verifica se existe um através do email
        const userAlreadyExists = await userRepository.findOne({
            email,
        })

        // Se existir um user com o email da verificação, então retorna um erro
        if (userAlreadyExists) {
            //Este erro tem o código 400 que é de Bad Request
            //Aqui podemos definir o código HTTP
            return response.status(400).json({
                error: "User already exists!",
            });
        }

        // Usamos o método create() do repositório para instanciar um user
        const user = userRepository.create({
            name,
            email
        })

        // Salva o user na base de dados
        await userRepository.save(user)

        // Devolve um JSON como resposta
        return response.status(201).json(user)
    }
}

export default UserController