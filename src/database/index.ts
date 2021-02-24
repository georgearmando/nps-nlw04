import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
    // defaultOptions recebe todos os atributos da conexão que está no file ormconfig.json
    const defaultOptions = await getConnectionOptions();

    /**
     * Verifica se a NODE_ENV é igual a test
     * Se for então a database apontará para a BD de teste
     * Se não, a database aponta para o valor contido no defaultOption que vem da orm
     * Ou Seja, se o comando for de teste a conexão será para a BD de teste
     * Se não, será para o SQLite
     */
    return createConnection(
        Object.assign(defaultOptions, {
            database:
                process.env.NODE_ENV === 'test'
                    ? "./src/database/database.test.sqlite"
                    : defaultOptions.database
        })
    )
}