import TermSpanishEnglish from "../model/termSpanishEnglish";
import TermSpanishEnglishRepository from "./interfaces/termSpanishEnglishRepository";

export default class TermSpanishEnglishService {

    private termSpanishEnglishRepository: TermSpanishEnglishRepository;

    constructor(termSpanishEnglishRepository: TermSpanishEnglishRepository) {
      this.termSpanishEnglishRepository = termSpanishEnglishRepository;
    }

		async getAllTerms (): Promise<TermSpanishEnglish[] | []> {
        // validaciones
        // mas procesos...
				return await this.termSpanishEnglishRepository.getAll();
		}

    async searchTermBySpanish(spanish: string): Promise<TermSpanishEnglish | null> {
        // validaciones
        // mas procesos...
        return await this.termSpanishEnglishRepository.search(spanish);
    }

    async createTermSpanishEnglish(termSpanishEnglish: TermSpanishEnglish): Promise<void> {
        // validaciones
        // mas procesos...
        await this.termSpanishEnglishRepository.save(termSpanishEnglish);
    }
}