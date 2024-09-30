//Dependency Inversion

type IConnection = {
    request(url: string): Promise<any>
}

class Fetch implements IConnection {
    request(url) {
        return fetch(url).then((data) => data.json())
    }

}

class MockFetch implements IConnection {
    request(url: string): Promise<any> {
        return Promise.resolve({user: "test"});
    }

}


class Http {
    constructor(public connection: IConnection) {
    }

    getData(url) {
        return this.connection.request(url)
    }
}

const fetchConnection = new Fetch();
const mockFetchConnection = new MockFetch();
const httpConnection = new Http(mockFetchConnection);


httpConnection.getData("https://jsonplaceholder.typicode.com/users").then((data) => console.log(data))