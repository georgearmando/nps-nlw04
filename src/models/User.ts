import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        // Se não existir id então cria um uuid (isto só quando estivermos a actualizar um user)
        // Faz com que a responsabilidade de se criar um id seja do código
        // Existe a possibilidade de deixar que o SGBD gere o uuid
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default User;