class Service{
    constructor(domain) {
        this.domain = domain;
        this.data = {
            categories:[],
            orders: {
                ordered:[],
                baking:[],
                finishing:[],
                served:[]
            }
        };
        this.cach = this.data;
        this.changeHandler = {};
    }

    start() {
        this.update();
        this.refresh = setInterval(()=> this.update(), 30000);
    }

    stop() {
        clearInterval(this.refresh);
    }

    getData(props) {
        return this.data
    }

    async getDataAsync(){
        const req = `${this.domain}data`;
        const body = {
            method: 'GET',
        };
        return  fetch(req, body).then((res) => res.json()).then((data)=>{
            this.cach = this.data;
            this.data = data;
        }).catch(console.error);
    }

    checkChanges(oldData, newData) {
        if(JSON.stringify(oldData) !== JSON.stringify(newData)) {
            Object.keys(this.changeHandler)
                .forEach((elem) => {
                    if(typeof this.changeHandler[elem] === 'function') {
                        this.changeHandler[elem]();
                    }
                });
        }
    }

    update(){
        this.getDataAsync()
            .then(()=>{
                this.checkChanges(this.cach, this.data);
            })
    }

    addChangeListener(callback) {
        this.changeHandler[callback.name] = ()=>{callback();}
    }

    removeChangeListener(callback) {
        delete this.changeHandler[callback.name];
    }

}

//http://localhost:8080/
export const domain ='https://cyber-pizza.herokuapp.com/';
export const dataSource = new Service(domain);
dataSource.start();
