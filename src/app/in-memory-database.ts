import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api"

import { Category } from "./pages/categories/shared/category.model" 

export class inMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            { id: 1, name: "Moradia", description: "Pagamentos de contas de casa"},
            { id: 2, name: "Saúde", description: "Plano de saude e remedios"},
            { id: 3, name: "Lazer", description: "Cinema, parques, praia, etc"},
            { id: 4, name: "Salário", description: "Recebimento de salário"},
            { id: 5, name: "Freelas", description: "Trabalhos como freelancer"}
        ];

        return { categories }
    }    
}
