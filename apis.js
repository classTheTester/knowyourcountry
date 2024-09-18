
/* 
When key & url are passed on to API instance, they will be fetched from a separate .txt file that is ignored by
git repo. This is for security measures.
The url attained from the file will mark where the key is supposed to go with a (key) region. The same goes
for the user input. Example: https://api.openweathermap.org/data/2.5/weather?q=(input)&appid=(key)
These substrings will be replaced
*/
class API {
    
    #url; #key;
    constructor(url,key) {
        this.#url = url;
        this.#key = key;
    }

    async get_request(input) {
        // Create full HTTP request string
        let req = this.#url.replace("(input)",input).replace("(key)",this.#key);
        //console.log(req);
        // Send request & handle response
        try {
            const response = await fetch(req);
            // 200 -> Success
            if (!response.ok) {
                /*
                400 -> Not Found
                502 -> Server Fail
                401 -> Invalid / Expired API Key
                404 -> Bad URL
                */
               console.log("Failed Request");
                throw new Error(`Response status: ${response.status}`);
            }

            console.log("Fetch Success");
            const json = await response.json();
            return json;
        } catch (error) {
            console.log("Timeout Error / Unknown");
            console.error(error.message);
        }
    }
}

class ViewModel {

    #test_api =  new API("https://api.openweathermap.org/data/2.5/weather?q=(input)&appid=(key)","80d4bdc85b9ee3eaf656e2d260cba5f2");

    #urls = {
        weather: new API("",""),
        forecast: new API("",""),
        flights: new API("",""),
        restaurants: new API("",""),
        attractions: new API("","")
    }

    constructor() {
        // Read file and create API instances
        return;
    }

    callTest() {
        let response = this.#test_api.get_request("istanbul");
        return response;
    }
}

let example = new ViewModel();
let res = example.callTest();
res.then((obj) => {
    let printable = JSON.stringify(obj);
    console.log("Object: " + printable);

});
//console.log(res);
