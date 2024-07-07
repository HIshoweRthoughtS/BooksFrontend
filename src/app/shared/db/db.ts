import { Book, BookReadStates, ReviewedBook, TodoBook } from "../interfaces";

interface DbStruct {
    other:Book[],
    todos:TodoBook[],
    reviewed:ReviewedBook[]
}

//in Books will only be books not already present in todo or review, that means no duplicates
let db:DbStruct = {
    other:[
        {
            "isbn":"3-920379-14-4",
            "author":"K. Gieck",
            "title":"Technische Formelsammlung",
            "publisher":"Gieck Verlag",
            "pages":-1,
            "extended_title":"",
            "more_pages":-1,
            "read_state":BookReadStates.exists,
            "first_read":undefined,
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
            "read_state":BookReadStates.todo,
            "first_read":undefined,
            "extra_info":"classic",
            "thoughts":"",
            started:undefined,
            finished:undefined
        },
        {
            "isbn":"978-3-423-28984-9",
            "author":"John Strelecky",
            "title":"Das Café am Rande der Welt",
            "publisher":"dtv",
            "pages":143,

            "extended_title":"Das Café am Rande der Welt - Eine Erzaehlung ueber den Sinn des Lebens",
            "more_pages":143,
            "first_read":"02.07.2024 -",
            "extra_info":"deutsch - aus dem englischen von Bettina Lemke",
            "thoughts":"",
            "read_state":BookReadStates.todo,
            started:undefined,
            finished:undefined
        }
    ],
    reviewed:[
        {
            "isbn":"978-0-141-43947-1",
            "author":"Marry Shelly",
            "title":"Frankenstein",
            "publisher":"PENGUIN CLASSICS",
            "pages":225,

            "extended_title":"Frankenstein or THE MODERN PROMETHEUS//Edited with an Introduction and Notes by MAURICE HINDLE//REVISED EDITION",
            "more_pages":273,
            "read_state":BookReadStates.reviewed,
            "first_read":"12/2023 - 03/2024",
            "extra_info":"classic",
            "thoughts":"*in Borat voice* very nice",
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
