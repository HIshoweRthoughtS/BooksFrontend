import { Book, ReviewedBook, TodoBook } from "../interfaces";

interface DbStruct {
    books:Book[],
    todos:TodoBook[],
    read:ReviewedBook[]
}

let db:DbStruct = {
    books:[
        {
            "isbn":"3-920379-14-4",
            "author":"K. Gieck",
            "title":"Technische Formelsammlung",
            "publisher":"Gieck Verlag",
            "pages":-1,
            "extended_title":"",
            "more_pages":-1,
            "extra_info":"Formelsammlung",
            "thoughts":""
        }
    ],
    todos:[
        {
            "isbn":"978-0-553-21241-9",
            "author":"Sir Arthur Conan Doyle",
            "title":"Sherlock Holmes",
            "publisher":"Bantam Classic",
            "pages":1059,

            "extended_title":"Sherlock Holmes The Complete Novels and Stories Volume 1",
            "more_pages":1059,
            "extra_info":"classic",
            "thoughts":"",
            read:false,
            started:null,
            finished:null
        }
    ],
    read:[
        {
            "isbn":"978-0-141-43947-1",
            "author":"Marry Shelly",
            "title":"Frankenstein",
            "publisher":"PENGUIN CLASSICS",
            "pages":225,

            "extended_title":"Frankenstein or THE MODERN PROMETHEUS//Edited with an Introduction and Notes by MAURICE HINDLE//REVISED EDITION",
            "more_pages":273,
            "extra_info":"classic",
            "thoughts":"*in Borat voice* very nice",
            readCoutn:1,
            reads:[
                    {
                        "id":"978-0-141-43947-1--1",
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
            rank:1
        }
    ]
};
export { db, DbStruct };
