import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('surveys')
class Survey {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Survey;