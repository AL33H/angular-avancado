import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api"


export class inMemoryDatabase implements InMemoryDbService{
    createDb(): any {
        const categories = [
            { id: 1, name: "Moradia", description: "Pagamentos de contas de casa"},
            { id: 2, name: "Saúde", description: "Plano de saude e remedios"},
            { id: 3, name: "Lazer", description: "Cinema, parques, praia, etc"},
            { id: 4, name: "Salário", description: "Recebimento de salário"},
            { id: 5, name: "Freelas", description: "Trabalhos como freelancer"}
        ];

        return { categories }
    }    
}
