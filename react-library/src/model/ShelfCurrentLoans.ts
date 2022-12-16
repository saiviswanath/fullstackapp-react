import { BookModel } from "./BookModel";

export class ShelfCurrentLoans {
    constructor(private _book: BookModel, private _daysLeft: number) {}
    public get book(): BookModel {
        return this._book;
    }
    public set book(value: BookModel) {
        this._book = value;
    }
    public get daysLeft(): number {
        return this._daysLeft;
    }
    public set daysLeft(value: number) {
        this._daysLeft = value;
    }
}