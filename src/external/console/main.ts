import TermSpanishEnglishService from "../../domain/application/termSpanishEnglishService";
// import TermSpanishEnglish from "../../domain/model/termSpanishEnglish";
import InMemoryTermSpanishEnglishRepository from "../persistence/inMemoryTermSpanishEnglishRepository";

export default class Main {
    async start(): Promise<void> {
        // repository
        const termSpanishEnglishRepository = new InMemoryTermSpanishEnglishRepository();

        // Services
        const service = new TermSpanishEnglishService(termSpanishEnglishRepository);

				// get all terms
				console.log('Searching terms...');
        console.log(await service.getAllTerms());

				// create new terms spanish - english
				// console.log('Creating term...');
				
        // await service.createTermSpanishEnglish(new TermSpanishEnglish("hola", "hello"));
        // await service.createTermSpanishEnglish(new TermSpanishEnglish("arbol", "tree"));
        // await service.createTermSpanishEnglish(new TermSpanishEnglish("yellow", "amarillo"));
        // await service.createTermSpanishEnglish(new TermSpanishEnglish("oso", "bear"));

				// console.log('Created success!!!');
				

				// get terms spanish -english
				// console.log('Searching terms...');
				
        // console.log(await service.searchTermBySpanish("arbol"));
        // console.log(await service.searchTermBySpanish("hola"));
    } 
}
