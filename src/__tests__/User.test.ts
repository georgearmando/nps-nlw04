import request from 'supertest';
import app from '../app';
import cerateConnection from "../database";

describe('users', () => {
    beforeAll(async () => {
        const connection = await cerateConnection();
        await connection.runMigrations();
    })

    it('Should be able to create a new user', async () => {
        const response = await request(app).post('/users').send({
            email: 'jhondoe@example.com',
            name: 'Jhon Doe'
        });

        expect(response.status).toBe(201);
    });

    it('Should not be able to create a user with exists email', async () => {
        const response = await request(app).post('/users').send({
            email: 'jhondoe@example.com',
            name: 'Jhon Doe'
        });

        expect(response.status).toBe(400);
    })
})