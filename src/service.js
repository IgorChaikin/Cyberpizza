class Service{
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

//http://localhost:8080/
export const domain ='https://cyber-pizza.herokuapp.com/';
export const dataSource = new Service(domain);
