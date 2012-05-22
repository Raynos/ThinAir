module.exports = {
    io: null,
    reactiveMethodNames: [],
    reactiveMethods: [],

    initialize: function(server) {
        this.io = require('socket.io').listen(server);

        var that = this;

        this.io.sockets.on('connection', function(socket) {
            // once the client connection is received, initialize reactive methods
            for (var i = 0; i < that.reactiveMethods.length; i++) {
                socket.on(that.reactiveMethodNames[i], that.reactiveMethods[i]);
            }
        });
    },

    // adding reactive method
    createReactiveMethod: function(name, callback) {
        this.reactiveMethodNames.push(name);
        this.reactiveMethods.push(callback);
    }
}