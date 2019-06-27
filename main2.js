const Parse = require('parse/node');

Parse.initialize(
    "vpaknmNdLkx7lfHb1b63mCUgwW03mvMmVMqVVxVv",
    "rnqMi4oajIB2zaPuuXizAeOxKOOB6cGF43AGt7M1",
    "yP32F36aTgJpmEFrQJtYYe48p43Z7xooHMvr558f"
)

Parse.serverURL = 'https://parseapi.back4app.com/'

var userQuery = new Parse.Query(Parse.User);
userQuery.equalTo('username', 'teguholica@gmail.com');

var pushQuery = new Parse.Query(Parse.Installation);
pushQuery.matchesQuery('user', userQuery);

pushQuery.find({useMasterKey: true}).then(result => console.log(result));

Parse.Push.send({
        where: pushQuery,
        data: {
            title: "Hello from the Cloud Code",
            alert: "Back4App rocks!",
        }
    }, {
        success: function () {
            // Push was successful
            response.success("push sent");
            console.log("Success: push sent");
        },
        error: function (error) {
            // Push was unsucessful
            response.error("error with push: " + error);
            console.log("Error: " + error);
        },
        useMasterKey: true
    });
