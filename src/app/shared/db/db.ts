import { Book } from "../interfaces";

interface DbStruct {
    books:Book[]
}

let db:DbStruct = {
    "books":[
        {
            "isbn":"978-0-141-43947-1",
            "author":"Marry Shelly",
            "title":"Frankenstein",
            "extended_title":"Frankenstein or THE MODERN PROMETHEUS//Edited with an Introduction and Notes by MAURICE HINDLE//REVISED EDITION",
            "publisher":"PENGUIN CLASSICS",
            "pages":225,
            "more_pages":273,
            "reads":[
                {
                    "startDate":"12/2023",
                    "finishDate":"03/2024",
                    "quicknote":"Read Again",
                    "review": {
                        "content":"already a favourite",
                        "createdAt":"01.01.1970",
                        "updatedAt":"01.01.1970"
                    },
                    "short_essay":""
                }     
            ],
            "rank":1,
            "extra_info":"",
            "thoughts":""
        }
    ]
};
export { db, DbStruct };
