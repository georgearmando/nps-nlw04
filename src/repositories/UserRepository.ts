import { EntityRepository, Repository } from "typeorm";
import User from "../models/User";

// Marca a classe como repositório da entidade User
/** Aplicamos o conceito de herença ao extendermos ao classe ao Repository
 *  Isto faz com que a nossa classe herda todos os métodos do Repository
 *  Esta classe é chamada de Custom Repository (Repositório Customizada)
 *  Pois ela está associada a apenas uma entidade
 */
@EntityRepository(User)
class UserRepository extends Repository<User> {

}

export default UserRepository;