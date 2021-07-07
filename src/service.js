export class Service{
    constructor(domain) {
        this.domain = domain;
    }

    async getCategories(){
        const req = `${this.domain}categories`;

        return  fetch(req, {
            method: 'GET',
        })
            .then((res) => res.json())
            .catch(console.error);
    }
}
