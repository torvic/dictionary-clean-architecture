import TermSpanishEnglish from "../../model/termSpanishEnglish";

export default interface TermSpanishEnglishRepository {
    search: (spanish: string) => Promise<TermSpanishEnglish | null>;
    save: (termSpanishEnglish: TermSpanishEnglish) => Promise<void>;
    getAll: () => Promise<TermSpanishEnglish[] | []>;
}