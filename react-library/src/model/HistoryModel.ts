export class HistoryModel {
    constructor(private _id: number, private _userEmail: string, 
        private _checkoutDate: string, private _returnedDate: string, 
        private _title: string, private _author: string, 
        private _description: string, private _img: string) {}
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get userEmail(): string {
        return this._userEmail;
    }
    public set userEmail(value: string) {
        this._userEmail = value;
    }
    public get checkoutDate(): string {
        return this._checkoutDate;
    }
    public set checkoutDate(value: string) {
        this._checkoutDate = value;
    }
    public get returnedDate(): string {
        return this._returnedDate;
    }
    public set returnedDate(value: string) {
        this._returnedDate = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get img(): string {
        return this._img;
    }
    public set img(value: string) {
        this._img = value;
    }
}