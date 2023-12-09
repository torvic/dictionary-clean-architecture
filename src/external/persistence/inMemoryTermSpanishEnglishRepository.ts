import TermSpanishEnglishRepository from "../../domain/application/interfaces/termSpanishEnglishRepository";
import TermSpanishEnglish from "../../domain/model/termSpanishEnglish";
import prisma from "../../lib/prisma";


export default class InMemoryTermSpanishEnglishRepository implements TermSpanishEnglishRepository {

		async getAll(): Promise<any> {
			const terms = await prisma.termSpanishEnglish.findMany();
			return terms;
		}

    async search(spanish: string): Promise<any | null> {
        // find in DB
				const term = await prisma.termSpanishEnglish.findMany({
					where: { spanish },
				});
				return term;
    }

    async save(termSpanishEnglish: TermSpanishEnglish): Promise<void> {
				await prisma.termSpanishEnglish.create({ data: {
					spanish: termSpanishEnglish.getSpanish(),
					english: termSpanishEnglish.getEnglish(),
				}});
    }
}