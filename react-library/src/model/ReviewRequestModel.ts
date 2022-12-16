export class ReviewRequestModel {
    constructor(private rating: number, private bookId: number,
        private reviewDescription?: string) {}
    public get _rating(): number {
        return this.rating;
    }
    public set _rating(value: number) {
        this.rating = value;
    }
    public get _bookId(): number {
        return this.bookId;
    }
    public set _bookId(value: number) {
        this.bookId = value;
    }
    public get _reviewDescription(): string | undefined {
        return this.reviewDescription;
    }
    public set _reviewDescription(value: string | undefined) {
        this.reviewDescription = value;
    }

}