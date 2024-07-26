
//this class will represent the rank i give to a book
//rank sounds simple enough and could be represented by a singel number

//but since I am doing it I will find a way to overcomplicate it
//ranks should be comparable even, if they aren't just numbers
//maybe a rank will be a book beeing as good as another.
//both books have equal value, but i dont know where to place them

//maybe the rank will simply evolve into a list, where multiple books can
//sit on the same rank.

//todo: a toString() method will show the rank in an easy to understand rep.

//todo: maybe ranking via drag and drop
//there should, however, be a soloution for when I cant decide

enum isType {
    number = 'number',
    string = 'string',
    other = 'any',
}

export class Rank {
    rankNum:number;
    rankString:string;
    rankWhatEver:any;

    rankType:isType;

    constructor(rank:any) {
        this.rankWhatEver = rank;
        this.rankType = isType.other;

        this.rankNum = -1.1;
        this.rankString = "-1.1";

        if  (typeof rank === 'number') {
            this.rankNum = rank;
            this.rankType = isType.number;
        }
        else if (typeof rank === 'string') {
            this.rankString = rank;
            this.rankType = isType.string
        }
    }

    //or: no rankType var. just save as any and check here like so
    //switch (typeof rank) -> case 'number'... case 'string' etc
    get toString(): string {
        let ret:string = "";

        switch (this.rankType) {
            case isType.number: {
                ret = "" + this.rankNum;
                break;
            }
            case isType.other: {
                ret = "" + this.rankNum;
                break;
            }
            case isType.string:
            default: {
                ret = this.rankString
            }
        }

        return ret;
    }

}
