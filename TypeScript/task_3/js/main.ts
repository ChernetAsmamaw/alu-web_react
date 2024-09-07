/* The Triple-Slash Directive allows you to include a reference path to
a file that is not part of the current file. */

/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";


const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
    ...row,
    age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
